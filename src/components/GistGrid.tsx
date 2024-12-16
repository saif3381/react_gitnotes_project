// // GistGrid.tsx (Grid View)
// import React from "react";
// import { Gist } from "./Gist";

// interface GistGridProps {
//   gists: Gist[];
// }

// const GistGrid: React.FC<GistGridProps> = ({ gists }) => (
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//     {gists.map((gist) => {
//       const date = new Date(gist.created_at);
//       const files = Object.values(gist.files);

//       return (
//         <div
//           key={gist.id}
//           className="p-4 border border-gray-300 rounded bg-white"
//         >
//           <h2 className="font-bold text-lg">
//             {gist.description || "No Description"}
//           </h2>
//           <p>
//             <strong>Date:</strong> {date.toLocaleDateString()}
//           </p>
//           <p>
//             <strong>Time:</strong> {date.toLocaleTimeString()}
//           </p>
//           <p>
//             <strong>Keyword:</strong>{" "}
//             {files[0]?.filename.split(".").pop() || "N/A"}
//           </p>
//           <p>
//             <strong>Notebook Name:</strong> {files[0]?.filename || "N/A"}
//           </p>
//         </div>
//       );
//     })}
//   </div>
// );

// export default GistGrid;
