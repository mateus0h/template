import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Grid,
} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

import { ButtonSave, CardButtonSave } from './styles';

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
                size="small"
                fullWidth
                label="First name"
                name="firstName"
                required
                variant="outlined"
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <TextField
                size="small"
                fullWidth
                label="Last name"
                name="lastName"
                required
                variant="outlined"
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <TextField
                size="small"
                fullWidth
                label="Email Address"
                name="email"
                required
                variant="outlined"
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <TextField
                size="small"
                fullWidth
                label="Phone Number"
                name="phone"
                type="number"
                variant="outlined"
              />
            </Grid>

            <Grid item md={3} xs={12}>
              <TextField
                size="small"
                fullWidth
                label="Country"
                name="country"
                required
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardButtonSave>
          <ButtonSave
            size="small"
            color="primary"
            variant="contained"
            startIcon={<SaveIcon />}
          >
            Salvar
          </ButtonSave>
        </CardButtonSave>
      </form>
    </Card>
  );
}
