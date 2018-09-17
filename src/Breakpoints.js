const BreakpointsValues = {
  mobile: 690,
  desktop: 1136,
}
const Breakpoints = {
  mobile: {
    minWidth: `(min-width: ${BreakpointsValues.mobile}px)`,
    minWidthValue: BreakpointsValues.mobile,
    maxWidth: `(max-width: ${BreakpointsValues.mobile-1}px)`,
    maxWidthValue: BreakpointsValues.mobile-1
  },
  // tablet: { //using the other breakpoints instead
  //   minWidth: null,
  //   maxWidth: null
  // },
  desktop: {
    minWidth: `(min-width: ${BreakpointsValues.desktop}px)`,
    minWidthValue: BreakpointsValues.desktop,
    maxWidth: `(max-width: ${BreakpointsValues.desktop-1}px)`,
    minWidthValue: BreakpointsValues.desktop-1
  }
};
export default Breakpoints;
