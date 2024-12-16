'use client';

import { Box, Typography } from '@portfolio/ui-library';

export default function Home() {
  return (
    <Box
      $justifyContent="center"
      $display="flex"
      $flexDirection="column"
      $width="100vw"
      $height="100vh"
      $alignItems="center"
      $sx={{
        gap: '1rem',
      }}
    >
      <Typography variant="h1">Work in progress</Typography>
    </Box>
  );
}
