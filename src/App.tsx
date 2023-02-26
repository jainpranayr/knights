import { classNames } from './utils'

function App() {
	return (
		<div className='container mx-auto grid place-content-center h-screen bg-gray-50'>
			<div className='grid grid-cols-8 grid-rows-8 h-full w-full shadow-md border-2 border-gray-500'>
				{Array.from({ length: 64 }, (_, index) => {
					const rowIndex = Math.floor(index / 8)
					const colIndex = index % 8
					const isEven = (rowIndex + colIndex) % 2 === 0

					return (
						<div
							key={`${rowIndex}-${colIndex}`}
							className={classNames(
								isEven ? 'bg-white' : 'bg-gray-500',
								'w-10 h-10 md:w-12 md:h-12  flex justify-center items-center`'
							)}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default App
