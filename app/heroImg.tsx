"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./components/ui/3d-card";

export function HeroImg() {
	return (
		<CardContainer className='inter-var'>
			<CardBody className='relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:bg-opacity-65 dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border'>
				<CardItem translateZ='100' className='mt-4'>
					<div className='h-[280px] w-[200px] md:h-[380px] md:w-[300px] xl:h-[480px] xl:w-[400px] relative'>
						<Image
							src={"/crbrs-hero.png"}
							alt='crbrs 3d dog'
							layout='fill'
							objectFit='contain'
							className='w-full object-cover rounded-xl group-hover/card:shadow-xl'
						/>
					</div>
				</CardItem>
			</CardBody>
		</CardContainer>
	);
}
