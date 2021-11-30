import axios from 'axios';
import BarChartIcon from '@mui/icons-material/BarChart';
import Box from '@mui/material/Box';
import CancelIcon from '@mui/icons-material/Cancel';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import InventoryIcon from '@mui/icons-material/Inventory';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

const theme = createTheme();

export default function Invoices() {
  const [invoices, setInvoices] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios
      .get(`http://localhost:3001/invoice`)
      .then(function (response) {
        setInvoices(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleCancelInvoice = (invoice) => {
    //Dummy
    axios.put(`http://localhost:3001/invoice/${invoice._id}`, {
      status: false,
    });
    history.go(0);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
          }}
        >
          <Container maxWidth='sm'>
            <Typography
              component='h1'
              variant='h2'
              align='center'
              color='text.primary'
              gutterBottom
            >
              <IconButton aria-label='settings'>
                <Link to='/stats'>
                  <BarChartIcon />
                </Link>
              </IconButton>
              Invoices
              <IconButton aria-label='settings'>
                <Link to='/'>
                  <InventoryIcon />
                </Link>
              </IconButton>
            </Typography>
            <Typography
              component='h3'
              variant='h4'
              align='center'
              color='text.primary'
              gutterBottom
            ></Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth='md'>
          {/* End hero unit */}
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell align='center'>Date</TableCell>
                  <TableCell align='center'>Products</TableCell>
                  <TableCell align='center'>Status</TableCell>
                  <TableCell align='center'>Final Amount</TableCell>
                  <TableCell align='center'>Cancel</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow
                    key={invoice.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align='center' component='th' scope='row'>
                      {invoice.date.substring(0, 10)}
                    </TableCell>{' '}
                    <TableCell align='center' component='th' scope='row'>
                      {invoice.productName.map(
                        (product) =>
                          product.charAt(0).toUpperCase() +
                          product.slice(1) +
                          ' '
                      )}
                    </TableCell>
                    {invoice.status ? (
                      <TableCell align='center' component='th' scope='row'>
                        Paid
                      </TableCell>
                    ) : (
                      <TableCell align='center' component='th' scope='row'>
                        Canceled
                      </TableCell>
                    )}
                    <TableCell align='center'>
                      ${invoice.finalAmount.reduce((a, b) => a + b, 0)}.00
                    </TableCell>
                    {invoice.status ? (
                      <TableCell align='center'>
                        <IconButton
                          aria-label='settings'
                          onClick={() => handleCancelInvoice(invoice)}
                        >
                          <CancelIcon />
                        </IconButton>
                      </TableCell>
                    ) : (
                      <TableCell align='center'></TableCell>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </main>
    </ThemeProvider>
  );
}
