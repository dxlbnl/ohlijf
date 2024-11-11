import { SYSTEME_API_KEY } from "$env/static/private"


export type Tag = 'interesse' | 'nieuwsbrief' | 'MBS' | 'Geen MBS' | 'Vermoeidheid' | 'Pijn' | 'Anders'

const tagMap: Record<Tag, number> = {
  nieuwsbrief: 1076903,
  interesse: 1151851,
  MBS: 868210,
  "Geen MBS": 868215,
  Vermoeidheid: 868216,
  Pijn: 868217,
  Anders: 868214
}

type ContactField = {
  fieldName?: string,
  slug: string,
  value: string
}
type Contact = {
  id: number,
  email: string,
  fields: ContactField[]
  tags: {
    id: number,
    name: string
  }[]
}

const getContact = async (email: string) : Promise<Contact | null>  => {
  const response = await fetch(`https://api.systeme.io/api/contacts?${new URLSearchParams({
    email
  })}`, {
    headers: {
      accept: 'application/json',
      'X-API-Key': SYSTEME_API_KEY
    }
  })

  if (!response.ok) {
    throw new Error('Failed getting contact')
  }

  const data = await response.json()
  if (data.items) {
    return data.items.at(0) as Contact
  }
  
  return null
}

const createContact = async (email: string, fields: ContactField[]): Promise<Contact> => {
  const response = await fetch(`https://api.systeme.io/api/contacts`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'X-API-Key': SYSTEME_API_KEY
    },
    body: JSON.stringify({
      email,
      fields
    })
  })

  if (!response.ok) {
    throw new Error('Failed creating contact')
  }
  const contact: Contact = await response.json()

  return contact
}


const updateContact = async (id: number, fields: ContactField[]) =>
  fetch(`https://api.systeme.io/api/contacts/${id}`, {
    method: 'PATCH',
    headers: {
      accept: 'application/json',
      'content-type': 'application/merge-patch+json',
      'X-API-Key': SYSTEME_API_KEY
    },
    body: JSON.stringify({
      fields
    })
  })

const addTag = async (id: number, tagId: number) =>
  fetch(`https://api.systeme.io/api/contacts/${id}/tags`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'X-API-Key': SYSTEME_API_KEY
    },
    body: JSON.stringify({
      tagId
    })
  })


type Props = {
  email: string;
  tags: Tag[];
  name?: string;
}
export const addOrUpdateContact = async ({ email, tags, name }: Props) => {

  const contact = await getContact(email)

  const fields: ContactField[] | null = name ? [{
    slug: 'first_name',
    value: name
  }] : null
  
  const newTagIds = new Set(tags.map(tag => tagMap[tag]))

  if (contact) {
    console.log('Updating contact', contact.email, 'with fields', fields)
    if (fields) {
      const res = await updateContact(contact.id, fields)
      
      if (!res.ok)
        console.log(await res.text())
    }

    const currentTagIds = new Set(contact.tags.map(({ id}) => id))

    currentTagIds.forEach(tag => newTagIds.delete(tag))

    for (let tagId of newTagIds) {
      console.log('\tAdding tag', tagId)
      const res = await addTag(contact.id, tagId)
      if (!res.ok)
        console.log(await res.text())

    }
  } else {
    const contact = await createContact(email, fields ?? [])
    console.log('Creating contact', contact.email, 'with fields', fields)
    console.log("Created contact", contact)

    for (let tagId of newTagIds) {
      console.log('\tAdding tag', tagId)
      const res = await addTag(contact.id, tagId)
      if (!res.ok)
        console.log(await res.text())
    }
  }
} 