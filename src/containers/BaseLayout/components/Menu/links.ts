import ROUTES from '../../../../config/routes'

export default function links() {
  return [
    {
      id: 1,
      url: ROUTES.HOME,
      title: 'Home'
    },
    {
      id: 5,
      url: ROUTES.NEWS,
      title: 'News'
    },
    {
      id: 6,
      url: ROUTES.PAST,
      title: 'Past'
    },
    {
      id: 13,
      url: ROUTES.THREADS,
      title: 'Threads'
    },
    {
      id: 2,
      url: ROUTES.ASK,
      title: 'Ask'
    },
    {
      id: 3,
      url: ROUTES.COMMENTS,
      title: 'Comments'
    },
    {
      id: 4,
      url: ROUTES.JOBS,
      title: 'Jobs'
    },
    {
      id: 11,
      url: ROUTES.SHOW,
      title: 'Show'
    },
    {
      id: 12,
      url: ROUTES.SUBMIT,
      title: 'Submit'
    }
  ]
}
