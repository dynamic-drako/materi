import { useState } from "react";
import axios from "axios";
function App() {
  const [imageSelected, setImageSelected] = useState("");
  const [imageUploaded, setImageUploaded] = useState("");
  console.log("hasil upload", imageSelected);

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "gfydmil3");
    axios
      .post("https://api.cloudinary.com/v1_1/thorthedev/image/upload", formData)
      .then((response) => setImageUploaded(response.data.url));
  };
  return (
    <div>
      <div>
        <h1>Image upload</h1>
      </div>
      <div>
        <input
          type="file"
          onChange={(event) => {
            setImageSelected(event.target.files[0]);
          }}
        />
        <button onClick={uploadImage}>Upload Image</button>
      </div>
      {imageUploaded === "" ? null : <img src={imageUploaded} alt="zoom" />}
    </div>
  );
}

export default App;
