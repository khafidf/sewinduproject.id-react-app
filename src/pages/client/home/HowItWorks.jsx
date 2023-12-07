import React from "react";
import { FaCameraRetro } from "react-icons/fa6";

export const HowItWorks = () => {
	return (
		<div className="w-full px-2 py-8 bg-gray-900 xl:py-0 text-blue-gray-50">
			<div className="container mx-auto xl:py-8 sm:px-2">
				<div className="flex flex-col xl:py-8">
					<div className="flex items-center justify-center gap-4 mb-8 xl:mb-16">
						<FaCameraRetro size={36} />
						<h2 className="text-lg font-bold md:text-xl lg:text-2xl">
							How it works?
						</h2>
					</div>
					<div className="flex flex-col gap-4 md:px-2 text-blue-gray-900">
						<div className="flex flex-col items-center gap-4 md:mx-auto md:flex-row">
							<img
								src="book.webp"
								className="max-w-[320px] sm:max-w-[340px] lg:max-w-[460px]"
								width={460}
								height={460}
								alt="Booking"
							/>
							<div className="flex w-[320px] sm:w-[340px] lg:w-[460px] flex-col gap-4 p-4  bg-gray-50 lg:p-8">
								<h3 className="text-base font-bold md:text-lg lg:text-xl">
									Book
								</h3>
								<p className="opacity-75">
									Tell us when, where, and what for - we&apos;ll hook you up
									with the right photographer.
								</p>
							</div>
						</div>
						<div className="flex flex-col items-center gap-4 md:mx-auto md:flex-row-reverse">
							<img
								src="plan.webp"
								className="max-w-[320px] sm:max-w-[340px] lg:max-w-[460px]"
								width={460}
								height={460}
								alt="Planning"
							/>
							<div className="flex flex-col gap-4 p-4 w-[320px] sm:w-[340px] lg:w-[460px] bg-gray-50 lg:p-8">
								<h3 className="text-base font-bold md:text-lg lg:text-xl">
									Plan
								</h3>
								<p className="opacity-75">
									Your photographer is set to chat and plan the shoot with you
									using our WhatsApp contact.
								</p>
							</div>
						</div>
						<div className="flex flex-col items-center gap-4 md:mx-auto md:flex-row">
							<img
								src="shot.webp"
								className="max-w-[320px] sm:max-w-[340px] lg:max-w-[460px]"
								width={460}
								height={460}
								alt="Photoshoot"
							/>
							<div className="flex flex-col gap-4 p-4 w-[320px] sm:w-[340px] lg:w-[460px] bg-gray-50 lg:p-8">
								<h3 className="text-base font-bold md:text-lg lg:text-xl">
									Shoot
								</h3>
								<p className="opacity-75">
									Your photographer is equipped with top gear, arriving
									punctually to capture your moments and make it a fantastic
									time.
								</p>
							</div>
						</div>
						<div className="flex flex-col items-center gap-4 md:mx-auto md:flex-row-reverse">
							<img
								src="delivery.webp"
								className="max-w-[320px] sm:max-w-[340px] lg:max-w-[460px]"
								width={460}
								height={460}
								alt="Delivery file"
							/>
							<div className="flex flex-col gap-4 p-4 w-[320px] sm:w-[340px] lg:w-[460px] bg-gray-50 lg:p-8">
								<h3 className="text-base font-bold md:text-lg lg:text-xl">
									Delivery
								</h3>
								<p className="opacity-75">
									You&apos;ll get your photos in 48 hours or less after your
									session, ready for direct download to your devices.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
