import { useMutation } from "@apollo/client";
import {
  Button,
  Group,
  Modal,
  Space,
  Stack,
  Textarea,
  TextInput,
} from "@mantine/core";
import {
  CREATE_NEW_TOKEN,
  DELETE_TOKEN,
  UPDATE_TOKEN,
} from "../../../queries/tokens";
import QRCode from "qrcode.react";
import JSZip from "jszip";
import FileSaver from "file-saver";

export default function TokenModal({ opened, form, nft, close, callbacks }) {
  const modalTitle =
    form.values.name === ""
      ? nft?.name
        ? nft?.name
        : "Create New NFT"
      : form.values.name;

  const [createToken] = useMutation(CREATE_NEW_TOKEN, {
    variables: { ...form.values, event: "NUS Fintech Lab Launch" },
    onCompleted: ({ createToken }) => {
      if (createToken.response) {
        callbacks.create(form.values);
        close();
      } else {
      }
    },
  });

  const [updateToken] = useMutation(UPDATE_TOKEN, {
    variables: form.values,
    onCompleted: ({ updateToken }) => {
      if (updateToken.response) {
        callbacks.update(form.values);
        close();
      } else {
      }
    },
  });

  const [deleteToken] = useMutation(DELETE_TOKEN, {
    variables: form.values,
    onCompleted: ({ deleteToken }) => {
      if (deleteToken.response) {
        callbacks.delete(form.values);
        close();
      } else {
      }
    },
  });

  const handleTokenDownload = () => {
    if (nft === null) return;
    
      const canvans =  document.getElementsByClassName(nft._id);
      const qrName = canvans[0].getAttribute("name")
      const zip = new JSZip();
        const item = {
          data: canvans[0].toDataURL().substring(22),
          name: qrName,
        };
        zip.file(item.name + ".png", item.data, {
          base64: true,
        });
    
      zip.generateAsync({ type: "blob" }).then(function (content) {
        FileSaver.saveAs(content, qrName + "QR");
      });
      
  };

  if (nft === null) return;
  return (
    <Modal centered opened={opened} onClose={close} title={modalTitle}>
      <Stack>
        <TextInput label="Name" {...form.getInputProps("name")} />
        <Textarea label="Description" {...form.getInputProps("description")} />
        <TextInput label="Image URL" {...form.getInputProps("imageURL")} />
        <TextInput label="External Link" {...form.getInputProps("link")} />
        <Space />
        <Group position="apart">
          {nft?._id && <Button onClick={() => updateToken()}>Update</Button>}
          {nft?._id === null && (
            <Button onClick={() => createToken()}>Create</Button>
          )}
		  <Button onClick={handleTokenDownload}>Download</Button>
          <Button color="red" variant="subtle" onClick={() => deleteToken()}>
            Delete
          </Button>
		  
        </Group>
        <Group style={{display:"none"}}>
          <QRCode
            value={nft._id}
            className={`qrcode ${nft._id}`}
            name={nft.name}
			includeMargin={true}
          />    
        </Group>
      </Stack>
    </Modal>
  );
}
