import { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";

export default function ViewDistributors() {

  const [distributors, setDistributors] = useState([]);

  const fetchDistributors = () => {

    fetch("https://tech-agro-backend.vercel.app/api/distributors")
      .then(res => res.json())
      .then(data => setDistributors(data));

  };

  useEffect(() => {
    fetchDistributors();
  }, []);


  /* Approve distributor */
  const handleApprove = async (id) => {

    await fetch(
      `https://tech-agro-backend.vercel.app/api/distributors/approve/${id}`,
      {
        method: "PUT"
      }
    );

    fetchDistributors();
  };


  return (

    <AdminLayout>

      <div className="max-w-6xl">

        <h1 className="text-3xl mb-8">
          Distributor Management
        </h1>


        <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">

          <table className="w-full">

            {/* HEADER */}

            <thead className="bg-white/5 border-b border-white/10">

              <tr className="text-left text-gray-400 uppercase text-xs tracking-widest">

                <th className="px-6 py-4">
                  Name
                </th>

                <th className="px-6 py-4">
                  Email
                </th>

                <th className="px-6 py-4">
                  Status
                </th>

                <th className="px-6 py-4 text-right">
                  Action
                </th>

              </tr>

            </thead>


            {/* BODY */}

            <tbody>

              {distributors.map((d) => (

                <tr
                  key={d._id}
                  className="border-b border-white/5 hover:bg-white/5 transition"
                >

                  {/* Name */}

                  <td className="px-6 py-5 font-medium">
                    {d.name}
                  </td>


                  {/* Email */}

                  <td className="px-6 py-5 text-gray-300">
                    {d.email}
                  </td>


                  {/* Status */}

                  <td className="px-6 py-5">

                    <span
                      className={`px-4 py-1 rounded-full text-xs uppercase tracking-widest font-medium

                        ${
                          d.status === "Approved"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }

                      `}
                    >

                      {d.status || "Pending"}

                    </span>

                  </td>


                  {/* Action */}

                  <td className="px-6 py-5 text-right">

                    {d.status === "Approved" ? (

                      <span className="text-green-400 font-medium">
                        Approved
                      </span>

                    ) : (

                      <button
                        onClick={() => handleApprove(d._id)}
                        className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded-lg text-sm font-medium transition"
                      >
                        Approve
                      </button>

                    )}

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </AdminLayout>

  );

}