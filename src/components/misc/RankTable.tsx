import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { useState } from "react";

const RankTable = () => {
  const [page, setPage] = useState(0)

  const createData = (img: string, name: string, mmr: string) => {
    return {img, name, mmr};
  }
  const rows = [
    createData('/ranks/seasonal-rank-herald-1.png', 'Herald 1', '1-154 MMR'),
    createData('/ranks/seasonal-rank-herald-2.png', 'Herald 2', '154-308 MMR'),
    createData('/ranks/seasonal-rank-herald-3.png', 'Herald 3', '308-462 MMR'),
    createData('/ranks/seasonal-rank-herald-4.png', 'Herald 4', '462-616 MMR'),
    createData('/ranks/seasonal-rank-herald-5.png', 'Herald 5', '616-769 MMR'),
    createData('/ranks/seasonal-rank-guardian-1.png', 'Guardian 1', '769-924 MMR'),
    createData('/ranks/seasonal-rank-guardian-2.png', 'Guardian 2', '924-1078 MMR'),
    createData('/ranks/seasonal-rank-guardian-3.png', 'Guardian 3', '1078-1232 MMR'),
    createData('/ranks/seasonal-rank-guardian-4.png', 'Guardian 4', '1232-1386 MMR'),
    createData('/ranks/seasonal-rank-guardian-5.png', 'Guardian 5', '1386-1540 MMR'),
    createData('/ranks/seasonal-rank-crusader-1.png', 'Crusader 1', '1540-1694 MMR'),
    createData('/ranks/seasonal-rank-crusader-2.png', 'Crusader 2', '1694-1848 MMR'),
    createData('/ranks/seasonal-rank-crusader-3.png', 'Crusader 3', '1848-2002 MMR'),
    createData('/ranks/seasonal-rank-crusader-4.png', 'Crusader 4', '2002-2156 MMR'),
    createData('/ranks/seasonal-rank-crusader-5.png', 'Crusader 5', '2156-2310 MMR'),
    createData('/ranks/seasonal-rank-archon-1.png', 'Archon 1', '2310-2464 MMR'),
    createData('/ranks/seasonal-rank-archon-2.png', 'Archon 2', '2464-2618 MMR'),
    createData('/ranks/seasonal-rank-archon-3.png', 'Archon 3', '2618-2772 MMR'),
    createData('/ranks/seasonal-rank-archon-4.png', 'Archon 4', '2772-2926 MMR'),
    createData('/ranks/seasonal-rank-archon-5.png', 'Archon 5', '2926-3080 MMR'),
    createData('/ranks/seasonal-rank-legend-1.png', 'Legend 1', '3080-3234 MMR'),
    createData('/ranks/seasonal-rank-legend-2.png', 'Legend 2', '3234-3388 MMR'),
    createData('/ranks/seasonal-rank-legend-3.png', 'Legend 3', '3388-3542 MMR'),
    createData('/ranks/seasonal-rank-legend-4.png', 'Legend 4', '3542-3696 MMR'),
    createData('/ranks/seasonal-rank-legend-5.png', 'Legend 5', '3696-3850 MMR'),
    createData('/ranks/seasonal-rank-ancient-1.png', 'Ancient 1', '3850-4004 MMR'),
    createData('/ranks/seasonal-rank-ancient-2.png', 'Ancient 2', '4004-4158 MMR'),
    createData('/ranks/seasonal-rank-ancient-3.png', 'Ancient 3', '4158-4312 MMR'),
    createData('/ranks/seasonal-rank-ancient-4.png', 'Ancient 4', '4312-4466 MMR'),
    createData('/ranks/seasonal-rank-ancient-5.png', 'Ancient 5', '4466-4620 MMR'),
    createData('/ranks/seasonal-rank-divine-1.png', 'Divine 1', '4620-4820 MMR'),
    createData('/ranks/seasonal-rank-divine-2.png', 'Divine 2', '4820-5020 MMR'),
    createData('/ranks/seasonal-rank-divine-3.png', 'Divine 3', '5020-5220 MMR'),
    createData('/ranks/seasonal-rank-divine-4.png', 'Divine 4', '5220-5420 MMR'),
    createData('/ranks/seasonal-rank-divine-5.png', 'Divine 5', '5420-5620 MMR'),
    createData('/ranks/seasonal-rank-immortal.png', 'Immortal', '5620-8300 MMR'),
  ]

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  }
  return (
    <div className="flex flex-col">
    <TableContainer component={Paper} sx={{backgroundColor: 'transparent'}}>
    <Table sx={{width: 450, minHeight: 621, background: "#2222229c", borderRadius: "1rem"}} aria-label="simple table">
        <TableHead>
        <TableRow>
            <TableCell sx={{color: "white"}}>Rank</TableCell>
            <TableCell align="right" sx={{color: "white"}}>MMR</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        {rows
            .slice(page * 5, page * 5 + 5)
            .map((row) => (
            <TableRow
            key={row.name}
            sx={{'&:last-child td, &:last-child th': { border: 0 }}}
            >
                <TableCell sx={{color: "white"}}>
                    <div className="flex items-center">
                    <img className='w-20' src={row.img} alt="rank medal" />
                    {row.name}
                    </div>
                </TableCell>
                <TableCell align="right" sx={{color: "white"}}>{row.mmr}</TableCell>
            </TableRow>
        ))}
        </TableBody>
    </Table>
    </TableContainer>
    <TablePagination
      sx={{color: "white"}}
      component="div"
      count={36}
      rowsPerPage={5}
      rowsPerPageOptions={[5]}
      page={page}
      onPageChange={handleChangePage}
    />
    </div>
  )
}

export default RankTable
