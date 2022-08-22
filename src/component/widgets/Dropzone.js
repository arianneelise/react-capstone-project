import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Dropzone() {
  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone();
  const [files, setfiles] = useState([]);
  const [fileObjects, setFileObjects] = useState([]);
  const styles = {
    backgroundColor: "rgb(143, 168, 191)",
  };

  const changeStyle = (color) => {
    styles.backgroundColor = color;
  };

  useEffect(() => {
    if (acceptedFiles[0]) {
      setfiles((files) => [...files, acceptedFiles[0].path]);
    }
  }, [acceptedFiles]);

  useEffect(() => {
    const makeObjects = () => {
      let objectList = [];
      for (let i = 0; i < files.length; i++) {
        const item = {
          id: i,
          name: files[i],
        };
        objectList.push(item);
      }
      return objectList;
    };
    setFileObjects(makeObjects());
  }, [files]);

  return (
    <div className="dropzone-container">
      <div style={styles} {...getRootProps({ className: "dropzone" })}>
        <FontAwesomeIcon icon={faPlus} size="3x" />
        <input {...getInputProps()} />
        {isDragActive
          ? changeStyle("rgb(171, 190, 206)")
          : changeStyle("rgb(143, 168, 191)")}
        <p>drag 'n' drop some files here, or click to select files</p>
      </div>
      {acceptedFiles.length > 0 &&
        fileObjects.map((object) => (
          <div key={object.id} className="file">
            {object.name}
          </div>
        ))}
    </div>
  );
}
