import React from 'react'
import { useSelector, } from 'react-redux'
import {useDispatch} from 'react-redux'
import { addItems,removeItems } from '../Redux/Createslice'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
export default function Cart() {
  // function Cart(id, title, price, quantity, addremove) {
  //   return { id, title, price, quantity, addremove };
  // }
  
  // const rows = [
  //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  //   createData('Eclair', 262, 16.0, 24, 6.0),
  //   createData('Cupcake', 305, 3.7, 67, 4.3),
  //   createData('Gingerbread', 356, 16.0, 49, 3.
  
    const dispatch=useDispatch()
    let totalPrice=0
    const list=useSelector(state=>state.shop.list)
const items=list?.map((e,index)=>{
    totalPrice+=e.price*e.quantity
    return(
      <TableRow>
      <TableCell component="th" scope="row">
      {index + 1}
      </TableCell>
      <TableCell align="right">{e.title}</TableCell>
      <TableCell align="right">${e.price}</TableCell>
      <TableCell align="right">{e.quantity}</TableCell>
      <TableCell align="right">{e.price * e.quantity}</TableCell>
      <TableCell align="right">
      <button
            onClick={() => {
              dispatch(addItems(e));
            }}
            className="btn btn-success"
          >
            +
          </button>
          <button className="btn btn-danger" onClick={()=>{dispatch(removeItems(e.id))}}>-</button>
      </TableCell>

    </TableRow>
      

    )
})

  return (
    <>
    {/* <table className="table table-striped w-75 mx-auto my-3 text-black">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total Price</th>
          <th>add/remove</th>
        </tr>
      </thead>
      <tbody>{items}</tbody>
      <tfoot>
        <tr>
          <td>Total Price : </td>
          <td>{totalPrice}$</td>
        </tr>
      </tfoot>
    </table> */}
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Add/Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
      {items}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}
