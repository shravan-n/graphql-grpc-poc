import {
  Box,
  ButtonBase,
  styled,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { theme } from "../../../Themes/theme";
import { CONTRACT, TABLE_HEADINGS } from "../../../utils/constants";
import TableCell from "../../molecules/TableCell";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import UpdateIcon from "@mui/icons-material/Update";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { DELETE_CONTRACT, GET_CONTRACTS } from "../../../utils/queries";

interface Props {
  data: CONTRACT[];
}

const StyledTableRow = styled(TableRow)({
  display: "flex",
  flexDirection: "row",
});

const StyledTableContainer = styled(TableContainer)({
  borderRadius: theme.spacing(2),
  width: "100%",
  minHeight: theme.spacing(90),
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

const StyledContainer = styled(Box)({
  borderRadius: theme.spacing(2),
});

const StyledTable = styled(Table)({
  maxHeight: theme.spacing(250),
});

const ContractsTable = (props: Props) => {
  const navigate = useNavigate();
  const heading: string[] = TABLE_HEADINGS.cashkick;

  const [deleteContract] = useMutation(DELETE_CONTRACT);

  const handleUpdate = (contractInput: CONTRACT) => {
    console.log("Contract: ", contractInput);
    navigate("/addContract", {
      state: { contractInput: contractInput },
    });
  };

  const handleDelete = (contractId: number) => {
    deleteContract({
      variables: { contractId: contractId },
      refetchQueries: [GET_CONTRACTS],
    });
  };

  return (
    <Box>
      <StyledTableContainer>
        <StyledTable stickyHeader>
          <TableHead>
            <StyledContainer>
              <StyledTableRow>
                {heading.map((title: string) => {
                  return (
                    <TableCell
                      key={title}
                      variant={"normalText"}
                      content={[title]}
                      isHeader={true}
                    />
                  );
                })}
              </StyledTableRow>
            </StyledContainer>
          </TableHead>
          <TableBody>
            <TableContainer>
              {props.data &&
                props.data.map((table_row, index) => {
                  return (
                    <StyledTableRow selected={true} key={`contract${index}`}>
                      <TableCell
                        variant={"highlightedText"}
                        content={[table_row.name]}
                      />
                      <TableCell
                        variant={"normalText"}
                        content={[table_row.type]}
                      />
                      <TableCell
                        variant={"normalText"}
                        content={[`${table_row.perPayment}`]}
                      />
                      <TableCell
                        variant={"normalText"}
                        content={[`${table_row.paymentAmount}`]}
                      />
                      <ButtonBase
                        onClick={() => {
                          handleUpdate(table_row);
                        }}
                        disableRipple
                      >
                        <TableCell
                          variant="icon"
                          icon={<UpdateIcon />}
                          content={[]}
                        />
                      </ButtonBase>
                      <ButtonBase
                        onClick={() => {
                          handleDelete(table_row.contractId);
                        }}
                        disableRipple
                      >
                        <TableCell
                          variant="icon"
                          icon={<DeleteOutlineIcon />}
                          content={[]}
                        />
                      </ButtonBase>
                    </StyledTableRow>
                  );
                })}
            </TableContainer>
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
    </Box>
  );
};

export default ContractsTable;
