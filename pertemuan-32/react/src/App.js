import { useState } from "react";
import axios from "axios";
function App() {
  const [imageSelected, setImageSelected] = useState("");
  const [imageUploaded, setImageUploaded] = useState("");
  console.log("hasil upload", imageSelected);

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("image", imageSelected);
    // formData.append("upload_preset", "gfydmil3");
    formData.append("key", "35969ba19d2f852cb766c675ee5cdc58");
    axios
      .post("https://api.imgbb.com/1/upload", formData)
      .then((response) => setImageUploaded(response.data.data.url));
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
