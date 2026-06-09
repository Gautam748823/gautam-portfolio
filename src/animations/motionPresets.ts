import { motionDistance, motionScale, transitionDurations } from '@/design-system/tokens';
import { transitions, type TransitionConfig } from './transitions';

export interface MotionState {
  opacity: number;
  transform: string;
}

export interface MotionPreset {
  initial: MotionState;
  animate: MotionState;
  transition: TransitionConfig;
}

const visibleState: MotionState = {
  opacity: 1,
  transform: 'translate3d(0, 0, 0) scale(1)',
};

export const fadeIn: MotionPreset = {
  initial: {
    opacity: 0,
    transform: 'translate3d(0, 0, 0) scale(1)',
  },
  animate: visibleState,
  transition: transitions.entrance,
};

export const fadeUp: MotionPreset = {
  initial: {
    opacity: 0,
    transform: `translate3d(0, ${motionDistance.standard}, 0) scale(1)`,
  },
  animate: visibleState,
  transition: transitions.entrance,
};

export const fadeDown: MotionPreset = {
  initial: {
    opacity: 0,
    transform: `translate3d(0, -${motionDistance.standard}, 0) scale(1)`,
  },
  animate: visibleState,
  transition: transitions.entrance,
};

export const scaleIn: MotionPreset = {
  initial: {
    opacity: 0,
    transform: `translate3d(0, 0, 0) scale(${motionScale.reduced})`,
  },
  animate: visibleState,
  transition: transitions.entrance,
};

export const stagger = {
  delay: transitionDurations.fast,
} as const;
