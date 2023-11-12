import React, { useState } from "react";
import { BiSolidPencil, BiTrash } from "react-icons/bi";
import Modal from "react-modal";
import RemoveClientsModal from "./modals/removeClientsModal";
import { defaultModalStyle } from "@/app/components/modalstyle";
import EditClientsModal from "./modals/editClientsModal";

export interface ClientProps {
	id: number;
	name: string;
	email: string;
	phone: string;
	cpf: string;
}

const tabledata: ClientProps[] = [
	{
		id: 1,
		name: "Marcondes Cavalcante",
		email: "marciogdsf@gmail.com",
		phone: "99999999999",
		cpf: "091.644.383-33",
	},
	{
		id: 2,
		name: "Eai cla",
		email: "marcondescavalcante75@gmail.com",
		phone: "99999999999",
		cpf: "161",
	},
	{
		id: 3,
		name: "opa",
		email: "marciogdsf@gmail.com",
		phone: "99999999999",
		cpf: "1512",
	},
	{
		id: 4,
		name: "Marasconasion",
		email: "marciogdsf@gmail.com",
		phone: "99999999999",
		cpf: "512",
	},
	{
		id: 5,
		name: "Marasconasion",
		email: "marciogdsf@gmail.com",
		phone: "99999999999",
		cpf: "512",
	},
	{
		id: 6,
		name: "Marasconasion",
		email: "marciogdsf@gmail.com",
		phone: "99999999999",
		cpf: "512",
	},
];

type ModalProps = {
	isOpen: boolean;
	client: ClientProps | null;
};

export default function ClientsTable() {
	const hasContent = tabledata.length > 0;
	const [removeModal, setRemoveModal] = useState<ModalProps>({
		isOpen: false,
		client: null,
	});

	const [editModal, setEditModal] = useState<ModalProps>({
		isOpen: false,
		client: null,
	});

	const handleRemoveModalOpen = (client: ClientProps) => {
		setRemoveModal({ isOpen: true, client });
	};
	const handleRemoveModalClose = () => {
		setRemoveModal({ isOpen: false, client: null });
	};

	const handleEditModalOpen = (client: ClientProps) => {
		setEditModal({ isOpen: true, client });
	};
	const handleEditModalClose = () => {
		setEditModal({ isOpen: false, client: null });
	};

	return (
		<div className="bg-slate-800 h-full shadow-xl shadow-[rgba(0,0,0,0.4)] p-5 rounded-xl overflow-y-auto scrollbar">
			<Modal style={defaultModalStyle} isOpen={removeModal.isOpen}>
				<RemoveClientsModal onRequestClose={handleRemoveModalClose} data={removeModal.client} />
			</Modal>
			<Modal style={defaultModalStyle} isOpen={editModal.isOpen}>
				<EditClientsModal onRequestClose={handleEditModalClose} client={editModal.client} />
			</Modal>

			{hasContent ? (
				<table className="w-full text-left text-sm table-fixed">
					<thead className="border-b-2 uppercase border-gray-800 text-gray-400">
						<tr>
							<th scope="col">Nome</th>
							<th scope="col">E-mail</th>
							<th scope="col">Telefone</th>
							<th scope="col">Cpf</th>
							<th scope="col">Ações</th>
						</tr>
					</thead>
					<tbody>
						{tabledata.map((data) => (
							<tr
								className="border-b-2 border-gray-700 [&>td]:py-3 [&>td]:overflow-clip "
								key={data.id}
							>
								<th scope="row" className="">
									{data.name}
								</th>
								<td>{data.email}</td>
								<td>{data.phone}</td>
								<td>{data.cpf}</td>
								<td>
									<div className="flex gap-3 [&>button:hover]:text-primary [&>button]:transition">
										<button onClick={() => handleEditModalOpen(data)}>
											<BiSolidPencil size={20} />
										</button>
										<button onClick={() => handleRemoveModalOpen(data)}>
											<BiTrash size={20} />
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<div className="flex h-full justify-center items-center">
					<p className="">Não há Clientes Adicionados</p>
				</div>
			)}
		</div>
	);
}