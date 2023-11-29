import resumesSvg from '~/assets/images/banner-illustration.svg';
import kakaoLogoSvg from '~/assets/images/kakao-logo.svg';
import logoText from '~/assets/images/logo-text.svg';
import logoSvg from '~/assets/images/logo.svg';
import menteeSvg from '~/assets/images/mentee-outlined.svg';
import mentorSvg from '~/assets/images/mentor-outlined.svg';
import noDataSvg from '~/assets/images/no-data.svg';
import backend from '~/assets/images/thumbnail/thumb-back.webp';
import devops from '~/assets/images/thumbnail/thumb-devops.webp';
import frontend from '~/assets/images/thumbnail/thumb-front.webp';
import fullstack from '~/assets/images/thumbnail/thumb-fullstack.webp';
import ml_ai from '~/assets/images/thumbnail/thumb-ml_ai.webp';
import mobile from '~/assets/images/thumbnail/thumb-mobile.webp';

export const assets = {
  logoSvg,
  logoText,
  resumesSvg,
  kakaoLogoSvg,
  menteeSvg,
  mentorSvg,
  noDataSvg,
  thumbnail: {
    FRONT: frontend,
    MOBILE: mobile,
    FULLSTACK: fullstack,
    BACK: backend,
    ML_AI: ml_ai,
    DEVOPS: devops,
  },
};
