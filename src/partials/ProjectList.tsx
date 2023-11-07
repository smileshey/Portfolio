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
      <Project
        name="Generating Passenger Rail Cost Estimates using ML"
        description=" 
        Passenger rail is a cornerstone of urban mobility. The construction of new rail projects poses challenges as the upfront investment can be infeasbile for many jurisdictions. To help combat this, I've created a publicly available construction cost estimation tool that is accessible to anyone via the app provided here. This tool uses a model that was trained on available construction data and outputs a prediction for the cost to build that project.

        "
        link="https://buildmoretrains.streamlit.app/"
        img={{ src: '/assets/images/train.png', alt: 'SmashIcons: train logo' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Machine Learning</Tags>
            <Tags color={ColorTags.SKY}>Python</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
