import Show from 'database/models/show.model'

import { showValidation } from 'helpers/validations'
import { validateBody } from '../utils/tools'

export const addShow = async (req) => {
  const body = req.body
  try {
    //// validation
    const valid = await validateBody(showValidation, body)
    if (!valid) {
      throw new Error('Check your form')
    }

    const show = new Show({
      ...body,
    })
    await show.save()
    return show
  } catch (error) {
    throw error
  }
}

export const paginateShows = async (page, limit) => {
  try {
    const options = {
      page,
      limit,
      sort: { _id: 'desc' },
    }

    const shows = await Show.aggregatePaginate({}, options)
    return shows
  } catch (error) {
    throw error
  }
}

export const removeById = async (id) => {
  try {
    const show = await Show.findByIdAndRemove(id)
    if (!show) throw new Error('Sorry, no show found')
    return show
  } catch (error) {
    throw error
  }
}

export const getBySlug = async (query) => {
  try {
    const show = await Show.find({ slug: query.slug }).exec()
    if (show.length <= 0) {
      return
    }
    return show
  } catch (error) {
    throw error
  }
}

export const updateBySlug = async (slug, body) => {
  try {
    const show = await Show.findOneAndUpdate(
      { slug: slug },
      { $set: body },
      { new: true }
    )
    if (!show) throw new Error('No show found')
    return show
  } catch (error) {
    throw error
  }
}

export const getAllShows = async (sortBy, order, limit, skip) => {
  try {
    const shows = await Show.find({})
      .sort([[sortBy, order]])
      .skip(parseInt(skip))
      .limit(parseInt(limit))

    return shows
  } catch (error) {
    throw error
  }
}
