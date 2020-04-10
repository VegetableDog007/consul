export default function(visitable, clickable, text, attribute, collection, page, filter) {
  const service = {
    name: text('a span:nth-child(2)'),
    service: clickable('a'),
    externalSource: text('.source-list-item'),
  };
  return {
    visit: visitable('/:dc/services'),
    services: collection('.consul-service-list > ul > li:not(:first-child)', service),
    dcs: collection('[data-test-datacenter-picker]', {
      name: clickable('a'),
    }),
    navigation: page.navigation,
    filter: filter,
    home: clickable('[data-test-home]'),
  };
}
