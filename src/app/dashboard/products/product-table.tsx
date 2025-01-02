"use client";

import Table from "@/ui/dashboard/table";
import { Product } from "@prisma/client";
import { createColumnHelper } from "@tanstack/react-table";

const ProductTable = ({ data }: { data: any[] }) => {
  const columnHelper = createColumnHelper<Product>();

  const columns = [
    columnHelper.accessor("name", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("description", {
      cell: (info) => info.getValue(),
      size: 240,
    }),
    columnHelper.accessor("price", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("stock", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("category", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("brand", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("createdAt", {
      cell: (info) => info.getValue().toLocaleString(),
    }),
    columnHelper.accessor("updatedAt", {
      cell: (info) => info.getValue().toLocaleString(),
    }),
    columnHelper.accessor("material", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("dimensions", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("weight", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("color", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("style", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("room", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("assemblyRequired", {
      cell: (info) => (info.getValue() ? "Yes" : "No"),
    }),
    columnHelper.accessor("warrantyPeriod", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("loadCapacity", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("seatingCapacity", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("adjustableFeatures", {
      cell: (info) => info.getValue(),
    }),
  ];

  return <Table data={data} columns={columns} />;
};

export default ProductTable;
