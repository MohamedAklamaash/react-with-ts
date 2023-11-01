import { useState } from "react";

interface user {
  userName: string;
  age: number;
}


const Prac_Hooks = () => {
  const [userDetails, setuserDetails] = useState<user>({
    userName:"",
    age:0
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userDetails);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userDetails?.userName}
          placeholder="Enter Name"
          onChange={(e) => {
            setuserDetails((prev) => ({ ...prev!, userName: e.target.value }));
          }}
        />
        <br/>
        <input
          type="number"
          name=""
          id=""
          placeholder="Age"
          value={userDetails?.age}
          onChange={(e) => {
            setuserDetails((prev) => ({
              ...prev,
              age: Number(e.target.value),
            }));
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Prac_Hooks;
