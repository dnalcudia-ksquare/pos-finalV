import { Bar } from 'react-chartjs-2';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import InventoryIcon from '@mui/icons-material/Inventory';
import { Link } from 'react-router-dom';
import ReceiptIcon from '@mui/icons-material/Receipt';
import Typography from '@mui/material/Typography';
import { useHistory, useLocation } from 'react-router-dom';

const theme = createTheme();

export default function Invoices() {
  const history = useHistory();
  const location = useLocation();

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
                <Link to='/'>
                  <InventoryIcon />
                </Link>
              </IconButton>

              Stats

              <IconButton aria-label='settings'>
                <Link to='/invoices'>
                  <ReceiptIcon />
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
        </Container>
      </main>

      <Bar
      datasetIdKey='id'
      data={{
        labels: ['Jun', 'Jul', 'Aug'],
        datasets: [
          {
            id: 1,
            label: '',
            data: [5, 6, 7],
          },
          {
            id: 2,
            label: '',
            data: [3, 2, 1],
          },
        ],
      }}
      />

    </ThemeProvider>
  );
}
