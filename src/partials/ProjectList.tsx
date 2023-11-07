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
          name="A Predictive Approach to Construction Cost Estimates"
          description=" 
          Passenger rail is a cornerstone of urban mobility. Given the high initial costs and financial risks associated with rail infrastructure projects, it's essential to provide stakeholders with clear cost estimates. This app introduces a construction cost estimation model that was trained on the data from existing rail projects to forecast the overall cost to build new passenger rail lines.        "
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
        description="This project uses machine learning to distinguish between human and synthetic speech extracted from several datasets of voice audio files. "
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
      <Project
        name="NLP Subreddit Classification"
        description="This project aims to predict the classification of text from two online communities using natural language processing techniques. By analyzing the content of posts, the project can help gain insights into the distinct behavior and preferences of the communities"
        link="https://github.com/smileshey/Subreddit-NLP"
        img={{ src: '/assets/images/reddit.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Machine Learning</Tags>
            <Tags color={ColorTags.EMERALD}>Sentiment Analysis</Tags>
            <Tags color={ColorTags.SKY}>Python</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
