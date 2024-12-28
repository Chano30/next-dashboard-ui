import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, teachersData } from "@/lib/data";
import Image from "next/image";
import React from "react";

type Teacher = {
  id: number;
  teacherId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subject",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
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

const TeacherList = () => {
  const renderRow = (item: Teacher) => {
    return (
      <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight ">
        <td className="flex items-center gap-4 p-4">
          <Image
            src={item.photo}
            alt=""
            width={40}
            height={40}
            className="md:hidden xl:block w-10 h-10 object-cover rounded-full"
          />
          <div className="flex flex-col">
            <h1 className="font-semibold">{item.name}</h1>
            <p className="text-xs text-gray-500">{item?.email}</p>
          </div>
        </td>
        <td className="hidden md:table-cell">{item.teacherId}</td>
        <td className="hidden md:table-cell">{item.subjects.join(",")}</td>
        <td className="hidden md:table-cell">{item.classes.join(",")}</td>
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
        <h1 className="hidden md:block">All Teachers</h1>
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
      <Table columns={columns} renderRow={renderRow} data={teachersData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default TeacherList;
