import {getCliClient} from 'sanity/cli'
const client = getCliClient()

async function clean() {
  try {
    const docs = await client.fetch('*[_type == "serviceCategory"]')
    for (const doc of docs) {
      if (!doc.subServices) continue;
      const newSubServices = doc.subServices.map((sub: any) => {
        const { details, ...rest } = sub;
        return rest;
      });
      await client.patch(doc._id).set({ subServices: newSubServices }).commit()
    }
    console.log('✅ Cleaned up details field')
  } catch (e) {
    console.error(e)
  }
}
clean()
