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
        name="Predicting CA Wildfire Causes with ML"
        description=" A predictive model that accurately identifies the cause of California wildfires using various features. By analyzing and modeling the data using analytical techniques, the project can help identify effective prevention strategies, allocate resources efficiently, and improve the response time of fire organizations."
        link="https://github.com/smileshey/CA-Wildfires-NN"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Machine Learning</Tags>
            <Tags color={ColorTags.INDIGO}>REST api</Tags>
            <Tags color={ColorTags.SKY}>Python</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
