import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent Machine Learning <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="A Better Walkscore Application using GeoSpatial Data"
        description="Existing measures like Walkscore often rely too heavily on proximity to businesses, rather than by using pedestrian amenities directly, which can misrepresent an area’s walkability. My project takes a different approach, using Seattle’s publicly available GIS data to generate a walkability index for every point in the city."
        link="https://whale-app-icxda.ondigitalocean.app/"
        img={{ src: '/assets/images/park.png', alt: 'SmashIcons: park logo' }}
        category={
          <>
            <Tags color={ColorTags.GREEN}>GeoSpatial</Tags>
            <Tags color={ColorTags.RED}>JS</Tags>
            <Tags color={ColorTags.SKY}>Python</Tags>
          </>
        }
      />

      <Project
        name="A Predictive Approach to Construction Cost Estimates"
        description="Passenger rail is a cornerstone of urban mobility. Given the high initial costs and financial risks associated with rail infrastructure projects, it's essential to provide stakeholders with clear cost estimates. This app introduces a construction cost estimation model that was trained on data from existing rail projects to forecast the overall cost of building new passenger rail lines."
        link="https://buildmoretrains.streamlit.app/"
        img={{ src: '/assets/images/train.png', alt: 'SmashIcons: train logo' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Machine Learning</Tags>
            <Tags color={ColorTags.SKY}>Python</Tags>
          </>
        }
      />

      <Project
        name="Classifying Speech Data using CNNs"
        description="This project uses machine learning to distinguish between human and synthetic speech extracted from several datasets of voice audio files."
        link="https://github.com/smileshey/VoiceClass--NN"
        img={{
          src: '/assets/images/mic-dynamic-color.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>TensorFlow</Tags>
            <Tags color={ColorTags.LIME}>PyTorch</Tags>
            <Tags color={ColorTags.SKY}>Python</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };

