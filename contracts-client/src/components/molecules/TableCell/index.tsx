import { styled, TableCell as MuiTableCell, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../../Themes/theme";

interface TableCellProps {
  variant: "highlightedText" | "normalText" | "icon";
  content: string[];
  isHeader?: boolean;
  icon?: React.ReactNode;
}

const StyledTableCell = styled(MuiTableCell)({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  backgroundColor: theme.palette.grey[100],
  minWidth: theme.spacing(40),
  borderBottom: "none",
});

const StyledTableCellHead = styled(MuiTableCell)({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  backgroundColor: theme.palette.grey[100],
  minWidth: theme.spacing(40),
  borderBottom: "none",
});

const TableCell = (props: TableCellProps) => {
  if (props.variant === "icon")
    return (
      <StyledTableCellHead data-testid="table-cell">
        {props.isHeader ? (
          <Typography
            variant="body2"
            color={theme.palette.text.disabled}
            children={props.content[0]}
          />
        ) : (
          props.icon
        )}
      </StyledTableCellHead>
    );

  if (props.variant === "normalText")
    return (
      <StyledTableCell data-testid="table-cell-normal">
        <Typography
          variant="body2"
          color={theme.palette.text.disabled}
          children={props.content[0]}
        />
        <Typography
          variant="h6"
          color={theme.palette.text.disabled}
          children={props.content[1]}
        />
      </StyledTableCell>
    );
  else
    return (
      <StyledTableCell data-testid="table-cell-highlighted">
        <Typography
          variant="body2"
          color={theme.palette.text.primary}
          children={props.content[0]}
        />
      </StyledTableCell>
    );
};

export default TableCell;
