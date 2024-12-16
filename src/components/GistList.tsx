// import React, { useEffect, useState } from "react";

// interface Gist {
//   id: string;
//   description: string;
//   created_at: string;
//   files: { [key: string]: { filename: string; language: string } };
//   owner: { login: string; avatar_url: string; html_url: string };
//   html_url: string;
// }
// const demo = [{ name: "saif" }];
// const LandingPage: React.FC = () => {
//   const [gists, setGists] = useState<Gist[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchGists = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const response = await fetch();
//         // "https://api.github.com/gists?per_per_page={}"
//         if (!response.ok) {
//           throw new Error(`Error fetching data: ${response.status}`);
//         }

//         const data: Gist[] = await response.json();
//         setGists(data);
//       } catch (err: any) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchGists();
//   }, []);
//   return <div className=""></div>;
// };

const GistList = () => {
  return (
    <div>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className=" bg-gray-100 text-left">
            <th className="p-4 border border-gray-100">Name </th>
            <th className="p-4 border border-gray-100">Date</th>
            <th className="p-4 border border-gray-100">Time </th>
            <th className="p-4 border border-gray-100">Keyword </th>
            <th className="p-4 border border-gray-100">NoteBook </th>
            {/* <th className="p-4 border border-gray-100">notes </th> */}
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default GistList;

// import React, { useState, useEffect } from "react";

// interface GistFile {
//   filename: string;
//   language: string | null;
// }

// interface Gist {
//   id: string;
//   description: string | null;
//   created_at: string;
//   files: Record<string, GistFile>;
// }

// const LandingPage: React.FC = () => {
//   const [gists, setGists] = useState<Gist[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);
//   const [layout, setLayout] = useState<"list" | "grid">("list");
//   const [page] = useState<number>(1);
//  useEffect (()=>{
//   const fetchGists = async
//  })

//   // Fetch public gists
//   useEffect(() => {
//     const fetchGists = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const response = await fetch(
//           `https://api.github.com/gists?page=${page}&per_page={}`,
//           {
//             headers: {
//               "X-GitHub-Api-Version": "2022-11-28",
//               Authorization: "",
//             },
//           }
//         );

//         if (!response.ok) {
//           throw new Error(`Error fetching data: ${response.status}`);
//         }

//         const data: Gist[] = await response.json();
//         setGists(data);
//       } catch (err: any) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchGists();
//   }, [page]);

//   // Handle Layout Toggle
//   const toggleLayout = () => {
//     setLayout((prevLayout) => (prevLayout === "list" ? "grid" : "list"));
//   };

//   return (
//     <div className="">
//       <div className="">
//         <h1 className="">Public Gists</h1>
//         <button onClick={toggleLayout} className="">
//           {layout === "list" ? "Switch to Grid" : "Switch to List"}
//         </button>
//       </div>

//       {loading && <p>Loading...</p>}
//       {error && <p className="text-red-500">Error: {error}</p>}

//       {!loading && !error && (
//         <>
//           {layout === "list" ? (
//             <table className="">
//               <thead>
//                 <tr className="bg-gray-200 text-left">
//                   <th className="p-2 border border-gray-300">Name</th>
//                   <th className="p-2 border border-gray-300">Date</th>
//                   <th className="p-2 border border-gray-300">Time</th>
//                   <th className="p-2 border border-gray-300">Keyword</th>
//                   <th className="p-2 border border-gray-300">Notebook Name</th>
//                   <th className="p-2 border  border-gray-300"> fork </th>
//                   <th className="p-2 border  border-gray-300"> star </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {gists.map((gist) => {
//                   const date = new Date(gist.created_at);
//                   const files = Object.values(gist.files);

//                   return (
//                     <tr key={gist.id} className="border border-gray-300">
//                       <td className="p-2 border border-gray-300">
//                         {gist.description || "No Description"}
//                       </td>
//                       <td className="p-2 border border-gray-300">
//                         {date.toLocaleDateString()}
//                       </td>
//                       <td className="p-2 border border-gray-300">
//                         {date.toLocaleTimeString()}
//                       </td>
//                       <td className="p-2 border border-gray-300">
//                         {files[0]?.language || "No Keyword"}
//                       </td>
//                       <td className="p-2 border border-gray-300">
//                         {files[0]?.filename || "No Notebook"}
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           ) : (
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//               {gists.map((gist) => {
//                 const date = new Date(gist.created_at);
//                 const files = Object.values(gist.files);

//                 return (
//                   <div
//                     key={gist.id}
//                     className="p-4 border border-gray-300 rounded bg-white"
//                   >
//                     <h2 className="text-lg font-bold">
//                       {gist.description || "No Description"}
//                     </h2>
//                     <p className="text-sm text-gray-500">
//                       {date.toLocaleDateString()} - {date.toLocaleTimeString()}
//                     </p>
//                     <p className="text-sm">
//                       <strong>Keyword:</strong> {files[0]?.language || "N/A"}
//                     </p>
//                     <p className="text-sm">
//                       <strong>Notebook:</strong> {files[0]?.filename || "N/A"}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default LandingPage;
