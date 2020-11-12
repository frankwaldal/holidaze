/** @jsxImportSource @emotion/core */

import { css } from '@emotion/core';
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import { BOLD_TEXT, LINK_STYLES } from '../../constants/emotionCSSrules';

export default function EstablishmentPreview({ establishment }) {
  const link = `/establishment/${establishment.id}`;

  return (
    <Grid item lg={4} sm={12}>
      <Card>
        <Link css={LINK_STYLES} to={link}>
          <CardHeader title={establishment.establishmentName} />
          <CardMedia
            css={css`height: 200px;`}
            image={establishment.imageUrl}
            title={establishment.establishmentName}
            />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item lg={8}>
                <Typography gutterBottom>
                  {establishment.description}
                </Typography>
              </Grid>
              <Grid css={css`align-self: flex-end;`} item lg={4}>
                <Typography
                  align='right'
                  css={BOLD_TEXT}
                  gutterBottom
                  >
                  Price: €{establishment.price},-
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Link>
      </Card>
    </Grid>
  )
}
