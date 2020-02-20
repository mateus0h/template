import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Button,
  TextField,
  Grid,
} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

export default function Repository() {
  return (
    <Card>
      <form autoComplete="off" noValidate>
        <CardHeader subheader="The information can be edited" title="Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={3} xs={12}>
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                margin="dense"
                name="firstName"
                required
                variant="outlined"
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <TextField
                fullWidth
                label="Last name"
                margin="dense"
                name="lastName"
                required
                variant="outlined"
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                margin="dense"
                name="email"
                required
                variant="outlined"
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                margin="dense"
                name="phone"
                type="number"
                variant="outlined"
              />
            </Grid>

            <Grid item md={3} xs={12}>
              <TextField
                fullWidth
                label="Country"
                margin="dense"
                name="country"
                required
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            size="small"
            color="primary"
            variant="contained"
            startIcon={<SaveIcon />}
          >
            Salvar
          </Button>
        </CardActions>
      </form>
    </Card>
  );
}
