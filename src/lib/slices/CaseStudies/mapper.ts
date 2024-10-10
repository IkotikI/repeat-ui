import * as prismic from '@prismicio/client'

// function logReturn<T>(value: T, name?: string): T {
//     console.log(name ? '~ ' + name : '~ value:', value);
//     return value
// }

export default async function mapper({ slice, context }: {
    slice: prismic.Content.CaseStudiesSlice,
    context: { client: prismic.Client<prismic.Content.AllDocumentTypes> }
}) {
    // console.log('~ slice:', slice);
    const caseStudies = (
        await Promise.all(
            slice.primary.cases.map(async (item: prismic.Content.CaseStudiesSliceDefaultPrimaryCasesItem) => {
                // logReturn(prismic.isFilled.contentRelationship(item.case_study) ? 'true' : 'false', 'isFilled')
                if (prismic.isFilled.contentRelationship(item.case_study)) {
                    return <prismic.Content.CaseStudyDocument>(
                        await context.client.getByID(item.case_study.id)
                        // logReturn(await context.client.getByID(item.case_study.id))
                    )
                }
            })
        )
    ).filter(Boolean)
    // console.log('~ caseStudies:', caseStudies);
    return {
        slice,
        caseStudies
    }
}