import { Skeleton } from "@mijn-ui/react-skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "@mijn-ui/react-table";

const TableSkeleton = () => {
  return (
    <Table className="pointer-events-none w-full">
      <TableHeader className="bg-accent capitalize">
        <TableRow>
          {Array.from({ length: 6 }).map((_, i) => (
            <TableHeaderCell key={i} className="max-w-40">
              <Skeleton className="h-3 w-full rounded-full" />
            </TableHeaderCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: 10 }).map((_, i) => (
          <TableRow key={i}>
            {Array.from({ length: 6 }).map((_, j) => (
              <TableHeaderCell key={j} className="max-w-40">
                <Skeleton className="h-3 w-full rounded-full" />
              </TableHeaderCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableSkeleton;
