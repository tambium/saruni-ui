/**
 *
 * @param props an object containing the series of props that effect shadow appearance.
 * @param shadowConfigs an object with prop to values/color mappings. The order of shadowConfig value is `<offset-x> <offset-y> <blur-radius> <spread-radius> || <inset> <color>`
 *
 * e.g. { props: { isFocused }, shadowConfigs: { isFocused: [{ values: `0 0 0 1px`, color: 'red' }] } }
 */
export const generateShadow = ({
  props,
  shadowConfigs,
}: {
  props: Record<string, unknown>;
  shadowConfigs: {
    [prop: string]: Array<{ values: string; color: string }>;
  };
}): string => {
  let result = ``;

  Object.keys(props).forEach((prop, idx, arr) => {
    const isLast = idx === arr.length - 1;

    if (!shadowConfigs[prop]) return;
    shadowConfigs[prop].forEach((config, innerIdx, childArr) => {
      const isLastInConfigs = innerIdx === childArr.length - 1;
      result += `${config.values} ${config.color}${
        !isLast || !isLastInConfigs ? `,` : ``
      }`;
    });
  });

  return result;
};
