import type { DrawerProps } from 'rc-drawer';
import './motion.css';
import 'rc-drawer/assets/index.css';

export const maskMotion: DrawerProps['maskMotion'] = {
	motionAppear: true,
	motionName: 'mask-motion',
	onAppearEnd: console.warn,
};

export const motion: DrawerProps['motion'] = (placement) => ({
	motionAppear: true,
	motionName: `panel-motion-${placement}`,
});

const motionProps: Partial<DrawerProps> = {
	maskMotion,
	motion,
};

export default motionProps;