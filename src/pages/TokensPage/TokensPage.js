import { useQuery } from "@apollo/client";
import {
  Button,
  Group,
  Image,
  SegmentedControl,
  Space,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { Plus, Download } from "tabler-icons-react";
import TokenGrid from "../../components/tokens/TokenGrid/TokenGrid";
import TokenModal from "../../components/tokens/TokenModal/TokenModal";
import { READ_TOKENS } from "../../queries/tokens";
import JSZip from "jszip";
import FileSaver from "file-saver";
import QRCode from "qrcode.react";

const emptyToken = {
  _id: null,
  name: "",
  description: "",
  imageURL: "",
  link: "",
};

export default function TokensPage() {
  const [nfts, setNfts] = useState([]);
  const [filteredNfts, setFilteredNfts] = useState(nfts);
  const { loading, error, data } = useQuery(READ_TOKENS);
  const [viewMode, setViewMode] = useState("grid");
  const [currentToken, setCurrentToken] = useState(null);

  const form = useForm({
    initialValues: emptyToken,
  });
  
  useEffect(() => {
    if (data === undefined) return;
    const tokens = data.readTokens;
    if (tokens) {
      setNfts(
        tokens.map((t) => ({
          ...t,
          image: (
            <Image src={t.imageURL} style={{ width: "100%" }} fit="cover" />
          ),
        }))
      );
    }
  }, [loading, error, data]);

  useEffect(() => {
    setFilteredNfts(nfts);
  }, [nfts]);

  const handleFilterChange = (event) => {
    const currSearch = event.currentTarget.value.trim().toLowerCase();
    const newFiltered = nfts.filter((nft) =>
      nft.name.trim().toLowerCase().includes(currSearch)
    );
    setFilteredNfts(newFiltered);
  };

  const callbacks = {
    create: (nft) =>
      setNfts([
        ...nfts,
        {
          ...nft,
          image: (
            <Image src={nft.imageURL} style={{ width: "100%" }} fit="cover" />
          ),
        },
      ]),
    update: (nft) =>
      setNfts(
        nfts.map((n) =>
          nft._id === n._id
            ? {
                ...nft,
                image: (
                  <Image
                    src={nft.imageURL}
                    style={{ width: "100%" }}
                    fit="cover"
                  />
                ),
              }
            : n
        )
      ),
    delete: (nft) => setNfts(nfts.filter((n) => n._id !== nft._id)),
  };

  const handleNewTokenClick = () => {
    setCurrentToken(emptyToken);
    form.setValues(emptyToken);
  };

  const handleTokenClick = (nft) => () => {
    setCurrentToken(nft);
    form.setValues(nft);
  };

  const handleDownloadAllTokens = () => {
    const canvans = document.getElementsByClassName("qrcode");
    if (!canvans.length) {
      return alert("No tokens added");
    }
    const zip = new JSZip();

    for (const canvan of canvans) {
      const item = {
        data: canvan.toDataURL().substring(22),
        name: canvan.getAttribute("name"),
      };
      zip.file(item.name + ".png", item.data, {
        base64: true,
      });
    }
    zip.generateAsync({ type: "blob" }).then(function (content) {
      FileSaver.saveAs(content, "qrcodes.zip");
    });
  };

  if (loading) return;
  return (
    <Stack p="xl">
      <TokenModal
        opened={!!currentToken}
        form={form}
        nft={currentToken}
        close={() => setCurrentToken(null)}
        callbacks={callbacks}
      />
      <Group>
        <Title>Tokens</Title>
        {!loading && (
          <Title style={{ color: "ButtonFace" }}>{nfts.length}</Title>
        )}
      </Group>
      <Group>
        <TextInput
          size="md"
          variant="filled"
          placeholder="Search for token"
          onChange={handleFilterChange}
        />
        <SegmentedControl
          value={viewMode}
          onChange={(e) => setViewMode(e)}
          data={[
            { label: "List", value: "list" },
            { label: "Grid", value: "grid" },
          ]}
          size="md"
        />
        <Button
          size="md"
          leftIcon={<Plus />}
          pl="xs"
          pr="sm"
          onClick={handleNewTokenClick}
        >
          Add New
        </Button>
        <Button
          size="md"
          leftIcon={<Download />}
          pl="xs"
          pr="sm"
          color="blue"
          onClick={handleDownloadAllTokens}
        >
          Download All
        </Button>
      </Group>
      <Space />
      {viewMode === "grid" ? (
        <TokenGrid handleTokenClick={handleTokenClick} nfts={filteredNfts} />
      ) : (
        <></>
      )}
      <Group style={{ display: "none" }}>
        {data.readTokens.map((t) => (
          <QRCode
            value={t._id}
            className={`qrcode ${t._id}`}
            name={t.name}
            id={t._id}
            includeMargin={true}
          />
        ))}
      </Group>
    </Stack>
  );
}
