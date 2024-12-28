import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, parentsData } from "@/lib/data";
import Image from "next/image";
import React from "react";

type Parent = {
  id: number;
  name: string;
  email?: string;
  students: string[];
  phone: string;
  address: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student Names",
    accessor: "studentNames",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Action",
    accessor: "action",
  },
];

const ParentList = () => {
  const renderRow = (item: Parent) => {
    return (
      <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight ">
        <td className="flex items-center gap-4 p-4">
          <div className="flex flex-col">
            <h1 className="font-semibold">{item.name}</h1>
            <p className="text-xs text-gray-500">{item?.email}</p>
          </div>
        </td>
        <td className="hidden md:table-cell">{item.students.join(',')}</td>
        <td className="hidden lg:table-cell">{item.phone}</td>
        <td className="hidden lg:table-cell">{item.address}</td>
        <td>
          <div className="flex items-center gap-2">
            <button className="p-2 bg-lamaSky rounded-full">
              <Image src="/view.png" alt="" width={16} height={16} />
            </button>
            {role === "admin" && (
              <button className="p-2 bg-lamaPurple rounded-full">
                <Image src="/delete.png" alt="" width={16} height={16} />
              </button>
            )}
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="flex-1 flex rounded-md m-4 mt-0 p-4 gap-4 flex-col bg-white">
      {/* TOP */}
      <div className="flex items-center justify-between  ">
        <h1 className="hidden md:block">All Parents</h1>
        <div className="flex flex-1 md:flex-none items-center gap-4 flex-col md:flex-row">
          {/* SEARCH */}
          <TableSearch />
          <div className="flex items-center gap-5 self-end">
            <button className="rounded-full bg-lamaYellow p-2">
              <Image src="/filter.png" alt="" width={16} height={16} />
            </button>
            <button className="rounded-full bg-lamaYellow p-2">
              <Image src="/sort.png" alt="" width={16} height={16} />
            </button>
            <button className="rounded-full bg-lamaYellow p-2">
              <Image src="/plus.png" alt="" width={16} height={16} />
            </button>
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={parentsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default ParentList;
