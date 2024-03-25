import { Layout, Typography } from "antd"

const styleAbout = {
  width: '100%',
  minHeight: 'calc(100vh - 60px)',
  padding: '20px'
}

export default function AppAbout() {
  return(
    <Layout style={styleAbout}>
      <Typography.Title>About Us</Typography.Title>

      <Typography.Paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste aliquam ratione tempora iure dicta dolorum voluptatum, delectus quis doloremque inventore veritatis. Dolores, sed exercitationem. Nam quisquam saepe vero fuga excepturi!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste aliquam ratione tempora iure dicta dolorum voluptatum, delectus quis doloremque inventore veritatis. Dolores, sed exercitationem. Nam quisquam saepe vero fuga excepturi!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste aliquam ratione tempora iure dicta dolorum voluptatum, delectus quis doloremque inventore veritatis. Dolores, sed exercitationem. Nam quisquam saepe vero fuga excepturi!
      </Typography.Paragraph>
      <Typography.Paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste aliquam ratione tempora iure dicta dolorum voluptatum, delectus quis doloremque inventore veritatis. Dolores, sed exercitationem. Nam quisquam saepe vero fuga excepturi!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste aliquam ratione tempora iure dicta dolorum voluptatum, delectus quis doloremque inventore veritatis. Dolores, sed exercitationem. Nam quisquam saepe vero fuga excepturi!
      </Typography.Paragraph>
      <Typography.Paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste aliquam ratione tempora iure dicta dolorum voluptatum, delectus quis doloremque inventore veritatis. Dolores, sed exercitationem. Nam quisquam saepe vero fuga excepturi!
      </Typography.Paragraph>
    </Layout>
  )
}