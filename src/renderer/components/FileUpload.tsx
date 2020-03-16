import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { FileUpload } from '../App.d';

type Props = {
  fileUpload: FileUpload;
  locatedWithinVisualizer?: boolean;
};

const FileUpload: React.FC<Props> = ({
  fileUpload,
  locatedWithinVisualizer,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    const file = target.yaml.files[0];
    //if no file, do nothing
    if (!file) return;
    fileUpload(file);
  };
  const color = locatedWithinVisualizer ? 'black' : 'white';
  return (
    <div>
      <Form
        className="file-upload"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <Form.Label htmlFor="files">
          <div style={{ color }}>Upload your Docker Compose File</div>
        </Form.Label>
        <Form.Control
          id="files"
          type="file"
          name="yaml"
          accept=".yml,.yaml"
          style={{ display: 'none' }}
        ></Form.Control>
        <Button type="submit">Upload</Button>
      </Form>
    </div>
  );
};
export default FileUpload;