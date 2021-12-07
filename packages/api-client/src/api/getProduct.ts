import { Product } from '..';

export async function getProduct(context: Record<string, any>, params: Record<string, any>): Promise<Product> {
  // Create URL object containing full endpoint URL
  const url = new URL('/vue_storefront_catalog_arezzo_product/_search', context.config.api.url);
  const q = {
    size: 10,
    query: {
      bool: {
        must: []
      }
    }
  };

  params.limit && (q.size = params.limit);
  params.id && q.query.bool.must.push({ match: { id: params.id } });
  // eslint-disable-next-line camelcase
  params.catId && q.query.bool.must.push({ match: { category_ids: params.catId } });

  const { data } = await context.client.post(url.href, q);
  console.log('\n\n* * *   DATA   * * *');
  console.log(data);
  console.log('* * * * * * * * * * *\n\n');

  // Return data from the API
  return data.hits.hits.map(hit => hit._source as Product);
}
