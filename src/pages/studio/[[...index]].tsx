import Head from 'next/head'
import { useEffect } from 'react'

const StudioPage = () => {
	useEffect(() => {
		// Redirection adaptative selon l'environnement
		const studioUrl = process.env.NODE_ENV === 'production' 
			? 'https://le-ravito.sanity.studio'
			: 'http://localhost:3333'
		
		window.location.href = studioUrl
	}, [])

	const studioUrl = process.env.NODE_ENV === 'production' 
		? 'https://le-ravito.sanity.studio'
		: 'http://localhost:3333'

	const environmentText = process.env.NODE_ENV === 'production' 
		? 'studio déployé'
		: 'studio local'

	return (
		<>
			<Head>
				<title>Studio Sanity - Le Ravito</title>
				<meta name="description" content="Interface d'administration pour Le Ravito" />
			</Head>
			<div className="flex items-center justify-center min-h-screen">
				<div className="text-center">
					<h1 className="text-2xl font-bold mb-4">Redirection vers le Studio Sanity...</h1>
					<p className="text-gray-600 mb-4">
						Redirection vers le {environmentText}
					</p>
					<p className="text-gray-600">
						Si la redirection ne fonctionne pas, visitez{' '}
						<a 
							href={studioUrl}
							className="text-blue-600 hover:underline"
							target="_blank"
							rel="noopener noreferrer"
						>
							{studioUrl}
						</a>
					</p>
				</div>
			</div>
		</>
	)
}

export default StudioPage
