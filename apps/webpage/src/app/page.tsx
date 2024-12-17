'use client';

import {
  Box,
  ButtonVariant,
  Header,
  Typography,
  Button,
  Footer,
  CardHeader,
  Card,
  CardDescription,
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  CarouselItem,
} from '@portfolio/ui-library';

export default function Home() {
  return (
    <>
      <Header backgroundColor="secondary" sticky>
        <Typography variant="h6">gloriana.dev - Portfolio</Typography>
      </Header>
      <Box
        justifyContent="center"
        display="flex"
        flexDirection="column"
        width="100vw"
        height="100vh"
        alignItems="center"
        sx={{
          gap: '1rem',
          padding: '2rem',
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://images.unsplash.com/photo-1732586920995-839e6d62c327?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Typography variant="h1">Welcome to My Portfolio</Typography>
        <Typography variant="h5">
          Showcasing my web development projects and skills
        </Typography>
        <Button variant={ButtonVariant.Ghost} color="primary">
          Explore My Work
        </Button>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        p="2rem"
        sx={{ gap: '2.5rem' }}
      >
        <Typography variant="h2">About Me</Typography>
        <Typography variant="body1">
          I am a passionate web developer with experience in building modern web
          applications using the latest technologies.
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        p="2rem"
        sx={{ gap: '2.5rem' }}
      >
        <Typography variant="h2">Projects</Typography>
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          <Carousel style={{ width: 'fit-content', maxWidth: '20rem' }}>
            <CarouselContent>
              <CarouselItem>
                <Card
                  style={{
                    padding: '1rem',
                    backgroundColor: 'white',
                  }}
                >
                  <CardHeader>
                    <Typography variant="h4" color="black">
                      Project 1
                    </Typography>
                  </CardHeader>
                  <CardDescription>
                    <Typography variant="body1">
                      Description of project 1.
                    </Typography>
                  </CardDescription>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card
                  style={{
                    padding: '1rem',
                  }}
                >
                  <CardHeader>
                    <Typography variant="h4" color="black">
                      Project 2
                    </Typography>
                  </CardHeader>
                  <CardDescription>
                    <Typography variant="body1">
                      Description of project 2.
                    </Typography>
                  </CardDescription>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <div>
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
          {/* Add more project boxes as needed */}
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        p="2rem"
        sx={{ gap: '2.5rem' }}
      >
        <Typography variant="h2">Skills</Typography>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          sx={{ gap: '2.5rem' }}
        >
          <Typography variant="body1">JavaScript</Typography>
          <Typography variant="body1">React</Typography>
          <Typography variant="body1">Node.js</Typography>
          <Typography variant="body1">CSS</Typography>
          {/* Add more skills as needed */}
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        p="2rem"
        bg="lightgray"
        sx={{ gap: '2.5rem' }}
      >
        <Typography variant="h2" color="black">
          Contact
        </Typography>
        <Typography variant="body1" color="black">
          Email: your.email@example.com
        </Typography>
        <Typography variant="body1" color="black">
          LinkedIn: linkedin.com/in/yourprofile
        </Typography>
        {/* Add more contact information as needed */}
      </Box>
      <Footer
        backgroundColor="secondary"
        textColor="primary"
        height="60px"
        padding="0 20px"
      >
        <p>© 2025 My App</p>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </Footer>
    </>
  );
}
