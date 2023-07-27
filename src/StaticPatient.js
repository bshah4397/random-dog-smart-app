import React from 'react';
import {
	Avatar,
	Grommet,
	Main,
	Heading,
	Paragraph,
	Card,
	CardBody,
	Image,
	Box,
	Tag,
	Tabs,
	Tab
} from 'grommet';
import LocationImg from './images/location.png';
import TrackerImg from './images/tracker.png';

const theme = {
	global: {
		font: {
			family: 'Roboto',
			size: '18px',
			height: '20px',
		},
	},
};



// Weight
// Race
// White
// Ethnicity
// Not Hispanic or Latino
// Language
// English
// Blood Type
// unknown

function StaticPatient() {
	return (
    <Grommet theme={theme} full>
      {/* <ResponsiveContext.Consumer> */}
      <Main pad="medium">
        <Box
          direction="column"
          // border={{ color: 'brand', size: 'large' }}
          pad="none"
          gap="small"
          height="full"
        >
          <Box
            direction="row"
            // border={{ color: 'brand', size: 'large' }}
            pad="small"
            gap="medium"
            height="small"
          >
            {/* <Box pad="none" justify="center">
              <Card height="small">
                <CardBody pad="small" justify="center">
                  <Avatar
                    size="xlarge"
                    src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?"
                  />
                </CardBody>
              </Card>
            </Box> */}

            <Box pad="none" direction="column" basis="full">
              <Card height="small">
                <CardBody pad="small">
                  <Heading margin="none" level={4}>
                    Jake Medlock
                  </Heading>
                  <Paragraph
                    maxLines={2}
                    size="small"
                    margin={{ bottom: "xsmall" }}
                  >
                    10 Cactus Drive, Los Angeles, CA 90001
                  </Paragraph>
                  <Box direction="row" gap="xsmall" wrap={true} width="xxlarge">
                    <Tag size="xsmall" name="Gender" value="M" />
                    <Tag size="xsmall" name="DOB" value="XXXX-XX-XX" />
                    <Tag size="xsmall" name="Height" value="6 Ft" />
                    <Tag size="xsmall" name="Weight" value="187 lbs" />
                    <Tag size="xsmall" name="Blood type" value="O+" />
                  </Box>
                </CardBody>
              </Card>
            </Box>
          </Box>
          {/* <Box
            direction="row"
            // border={{ color: 'brand', size: 'large' }}
            pad="small"
            width="full"
            height="full"
            // background='dark-3'
          >
            <Card basis="full" height={"3/4"}>
              <CardBody pad={"small"}>
                <Tabs justify="start" basis="full">
                  <Tab title="Pain Body Location Map">
                    <Box pad="medium" height={"full"}>
                      <Image fit="contain" src={LocationImg} />
                    </Box>
                  </Tab>
                  <Tab title="Pain Tracker">
                    <Box pad="medium" height={"full"}>
                      <Image fit="contain" fill src={TrackerImg} />
                    </Box>
                  </Tab>
                </Tabs>
              </CardBody>
            </Card>
          </Box> */}
        </Box>
      </Main>
      {/* </ResponsiveContext.Consumer> */}
    </Grommet>
  );
}

export default StaticPatient;