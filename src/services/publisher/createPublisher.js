import Publisher from "../../model/publisher/Publisher.js"

const createByList = async (publishers, publisherId) => {
    const response = {
        success: [],
        error: []
    }

    for (const publisher of publishers){
        const publisherCreate = await Publisher.create({
            name: publisher,
            publisherId
        })

        if(!publisherCreate){
            response.error.push(publisher)
            continue
        }
        response.success.push(publisher)
    }
    return response
}

export default createByList