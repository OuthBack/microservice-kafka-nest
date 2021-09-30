import avro from 'avsc';

export default avro.Type.forSchema({
  type: 'record',
  name: 'test',
  fields: [
    {
      name: 'category',
      type: {
        name: 'animals',
        type: 'enum',
        symbols: ['CAT', 'DOG'],
      },
    },
    {
      name: 'noise',
      type: 'string',
    },
  ],
});
