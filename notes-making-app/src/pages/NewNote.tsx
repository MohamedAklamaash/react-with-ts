import CreateTags from "react-select/creatable";
import { useState } from "react";
import { Link } from "react-router-dom";
const NewNote = () => {
  const [title, setTitle] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [bodyData, setbodyData] = useState<string>("");
  const handleTagsChange = (selectedTags: any) => {
    const tagValues = selectedTags.map((tag: any) => tag.value);
    setTags(tagValues);
  };

  return (
    <div className="p-4">
      <h1 className="text-4xl font-mono mb-10">New Note</h1>
      <main>
        <form className="md:flex items-center justify-around">
          <div className="flex flex-col items-start">
            <label className="text-lg font-sans font-bold text-black mb-3">
              Title:
            </label>
            <input
              placeholder="Title"
              type="text"
              className="border md:w-[300%] max-md:w-[100%] p-4 border-b-black"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="">
            <label className="text-lg font-bold font-sans">Tags</label>
            <CreateTags
              isMulti
              className="md:w-[200%] max-md:w-[100%] p-4"
              onChange={handleTagsChange}
            />
          </div>
        </form>
        <main className="mt-10">
          <h1 className="text-2xl font-bold font-sans">Body:</h1>
          <div className="flex items-center mt-10">
            <textarea
              className=" w-[80%] md:h-[60vmin] max-md:h-[80vmin] ml-[12%] p-4 overflow-x-hidden "
              placeholder="Enter The Notes Here"
            />
          </div>
        </main>
      </main>
      <div className="flex items-center justify-end mt-[5%] ">
        <button
          type="submit"
          className="bg-blue-600 text-white font-serif font-semibold rounded-full p-6 "
        >
          Save
        </button>
        <Link to="/">
          <button
            type="button"
            className="font-serif font-semibold rounded-full p-6"
          >
            Cancel
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NewNote;
