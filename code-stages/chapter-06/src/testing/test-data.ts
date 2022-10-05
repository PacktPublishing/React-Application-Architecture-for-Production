import { useEffect, useState } from 'react';

export const testData = {
  users: [
    {
      id: 'KV4Lv9yUHtNVB42V0ZrFf',
      createdAt: 1645628972465,
      email: 'user1@test.com',
      password: 'password',
      organizationId: 'amYXmIyT9mD9GyO6CCr',
    },
  ],
  organizations: [
    {
      id: 'amYXmIyT9mD9GyO6CCr',
      createdAt: 1645628972465,
      adminId: 'KV4Lv9yUHtNVB42V0ZrFf',
      name: 'Test Org 1',
      email: 'org1@test.com',
      phone: '944-528-1711',
      info: 'Totam alias fuga enim esse ullam sit. Nisi animi ut at voluptatem odit nam ea. Et fuga consequatur similique asperiores non suscipit corrupti aperiam. Molestiae quae aut laborum soluta blanditiis cupiditate hic nobis provident.Et quae aut labore aut rerum. Nisi at autem. Enim ipsum enim consectetur sequi consequatur. Sint qui qui quam. Voluptas dignissimos rem et natus. Autem et mollitia hic suscipit illum placeat.Optio aut sit assumenda quo eius omnis sed non consequatur. Numquam perferendis ea sit rerum officia cupiditate aut itaque doloremque. Itaque alias est repellendus. Esse consectetur tenetur velit autem excepturi. Velit perspiciatis saepe dolorum fugiat. Adipisci odio porro quibusdam similique sunt temporibus ipsam.Dolor assumenda aut qui et in perferendis et. Possimus quam qui impedit. Nesciunt aliquid qui consequatur possimus eos velit deserunt magni qui. Nam accusantium libero corrupti.Nulla in ut sunt rerum voluptatem rerum voluptates. Quis expedita natus earum similique officiis rem. Possimus similique architecto ut ad ea quia laborum. Officia voluptatibus quos aliquid delectus. Est voluptates necessitatibus iure et provident iusto at voluptatem sit. Molestiae exercitationem repellat tempore. Id excepturi officiis iste ullam similique et hic sit. Quis et eaque quidem. Qui voluptas ea et rem recusandae suscipit voluptatem sit. Sint ut officiis nihil perferendis nihil quibusdam molestiae. Blanditiis nihil ab illo. Voluptatem mollitia officia aperiam. Esse voluptatum voluptatem nihil minima. Placeat itaque aut numquam. Quis nobis commodi voluptatum ipsum perspiciatis aut. Omnis nulla enim natus architecto in. Autem ab aperiam vitae ipsa quia. Adipisci deleniti voluptas ea nam nesciunt. Doloribus delectus modi et. Voluptatem qui sit eaque qui totam. In facilis excepturi et quae et ullam maiores et sit. Enim consequatur dolorem dolorem eum ullam rerum cum similique odit. Aut velit rem est id et tenetur ut. Velit sunt et velit odit qui mollitia aut harum aut. Cupiditate doloribus dicta reprehenderit aliquid consequatur eum voluptas veritatis. Ut corporis sed et magni consequatur voluptatem.',
    },
  ],
  jobs: [
    {
      id: 'wS6UeppUQoiXGTzAI6XrM',
      createdAt: 1647070016299,
      organizationId: 'amYXmIyT9mD9GyO6CCr',
      position: 'Product Manager',
      info: 'Sequi accusantium repellat ea eius nulla consectetur sit. Quia et dolorem consequatur dolores quae. Et accusamus incidunt hic. Est dolores odio autem molestiae dicta minus laborum. Quia et nobis non officia. Itaque ipsam enim libero dolor aut est quas. Dolor nemo impedit quod illum. Ea tempora aut. Commodi nulla ut corporis. Est ipsum nulla expedita labore ut commodi. Fuga non quam sint fuga. Temporibus accusamus maiores. Ut cupiditate distinctio. Ratione iure quis saepe officia fugit autem. Alias voluptatem accusantium doloribus est et est sunt. Laboriosam ut aspernatur omnis doloremque ducimus eveniet incidunt eius. Quo cumque quas sit et. Non porro placeat nobis perferendis. Assumenda voluptas tempora eum quia aut voluptatem. Similique facere ullam saepe unde totam vel nihil velit. Tempora fuga sint praesentium. Est nihil asperiores sed perferendis id magni. Voluptatem deserunt sint. Consectetur velit qui et atque ea quis. Omnis omnis qui et est. Rerum dignissimos asperiores. Aut rem voluptatem dolor. Animi iure provident in et et voluptatem cumque itaque. Enim ipsum aspernatur autem fugit beatae et. Alias ut nostrum expedita vel et perferendis. Error aliquam distinctio fugiat voluptatem numquam dolorum. Omnis quam consequatur occaecati aliquam. Nesciunt doloremque atque fugit voluptates omnis praesentium. Provident aliquam ex delectus. Corporis ut omnis. Rerum adipisci cum dolor deserunt. Quo voluptatum quae dolor voluptates. Nam placeat optio ex sed inventore nihil labore. Optio aliquam ratione non. Facere dolor illum.',
      location: 'London',
      department: 'Product',
    },
    {
      id: 'Jkors1KGKA8Xk3-WIgKRW',
      createdAt: 1648208547099,
      organizationId: 'amYXmIyT9mD9GyO6CCr',
      position: 'UI/UX Designer',
      info: 'Aperiam doloremque et nisi ut ducimus. Deleniti id quibusdam temporibus provident facilis odio. Culpa debitis itaque vero deleniti velit enim. Dolor distinctio possimus dignissimos iste dignissimos porro. Quis nihil et beatae sit qui quia. Non autem distinctio harum omnis voluptate quia quod doloremque. Omnis qui quo provident qui quidem dolores. Aut laborum iure corporis. In sed nemo iste vitae distinctio ut unde. Id quidem quia ullam fugit dignissimos voluptate ut commodi dolorem. Excepturi enim consequatur eveniet consequatur. Quae consequatur est. Voluptate vel sit consequatur porro velit ex et. Enim et atque sed. Odit laboriosam et sint quam exercitationem voluptatum magnam doloribus. Labore perferendis nemo nihil enim vel suscipit qui qui. Quaerat doloremque earum consequatur voluptas. Rerum eum et quos voluptate. Repellendus similique tempore magnam autem aut qui. Voluptas tempore error magni quisquam vero et occaecati tempora dolores. Est est esse architecto nam fugiat deserunt quas reprehenderit expedita. Velit beatae sapiente esse consequatur velit neque. Officia itaque laborum omnis. Ut rerum et. Inventore maxime sit earum rerum cupiditate. Iste labore tempore alias dolore unde accusamus dolor ipsam voluptas. Fugiat cumque in voluptatem suscipit optio. Maiores voluptas dolor nam. Rerum consequatur fugiat enim veniam et autem quo. Quo eveniet neque corporis iure veritatis. Recusandae iusto ut explicabo exercitationem. Sed velit reiciendis blanditiis libero aliquid incidunt et modi. Neque explicabo quidem perferendis perspiciatis corrupti facilis nostrum eos. Odit consectetur aliquam sed itaque. Nemo quo sequi vel. Sit cumque voluptatibus culpa aut. Illum et dolor perferendis ad velit porro nostrum reiciendis error. Ipsam magni molestias sint itaque nihil. Aut facilis quos harum unde et dicta ut sequi vel. Numquam ullam quidem laudantium. Sit id facere ullam error sed est molestiae quaerat. Dolorum sit magni repellat qui ut. Sapiente quia quidem error nostrum. Consequatur blanditiis aut fugit accusamus autem ullam et iste. Saepe repellat eum repellendus et. Cum officia id debitis et labore vero beatae iure. Sapiente voluptas sit est accusantium eum in cupiditate animi. Omnis a magnam sequi ipsum id quis corporis dolorem consectetur. Et voluptate voluptas officiis laborum aut consequuntur.',
      location: 'Belgrade',
      department: 'Design',
    },
    {
      id: '2LJ_sgmy_880G9WivH5Hf',
      createdAt: 1645844810328,
      organizationId: 'amYXmIyT9mD9GyO6CCr',
      position: 'Software Engineer',
      info: 'Soluta et ut totam. Minus et temporibus delectus facilis in eaque consequatur. Asperiores nisi sint tempore necessitatibus blanditiis impedit qui est magni. Quia veritatis impedit iure repellat error voluptatem et. Numquam qui aut ratione minus dolorem similique voluptatibus. Officia voluptate dolore accusamus tenetur molestiae in in aut. Aut repudiandae nam nihil voluptas cum non sit tempore. Reprehenderit iste in tenetur quam adipisci voluptates enim. Iure et quia aspernatur deleniti magni. Expedita dolores quibusdam necessitatibus labore itaque. Accusantium nihil qui eveniet commodi at praesentium dicta. Deleniti ullam perferendis. Laborum tenetur et beatae minus ut similique nulla expedita. Optio porro aliquam officiis omnis aut expedita. Fugit doloribus asperiores repellat commodi est facilis esse sunt quibusdam. Ut eligendi id modi aut qui ratione. Eius et ea dignissimos earum nostrum corporis accusamus. Excepturi qui doloribus provident sed accusantium pariatur vitae eum. Quidem nesciunt voluptatem ex omnis. Enim corrupti rerum iure. Cum nostrum ut quia voluptatibus magnam laboriosam. At provident similique. Veniam eligendi error fugiat. Aspernatur alias voluptas et laboriosam veniam illum. Earum aspernatur nam aut. Itaque quasi voluptas repellat consequatur et commodi quia eaque. Dolores et doloribus. Temporibus quia reiciendis. Nam ipsum recusandae. Dolor sed sed distinctio dolorem corporis a dolores. Quisquam sunt ipsa quia et molestias. Magnam voluptates in. Voluptates vel ipsum dolore expedita voluptates quibusdam ratione. Et architecto ut maxime excepturi temporibus commodi ut. Nobis nobis voluptate mollitia qui unde molestiae quo. Porro fuga ut beatae dolorem. Ab nemo dolor est consequatur veritatis sunt rerum. Fuga voluptas id amet eum enim molestias omnis ipsa mollitia. Qui aliquid deleniti. Cumque ut nulla dolorem. Omnis officia maxime est. Excepturi vel maiores in facere expedita et eaque ut esse. Expedita quas ex omnis voluptatum molestiae sint inventore cumque consequatur. Illum sed molestiae. Exercitationem unde quia.',
      location: 'Berlin',
      department: 'Engineering',
    },
    {
      id: 'dY8Q5uXxRtyH55sxThr_B',
      createdAt: 1647253694268,
      organizationId: 'amYXmIyT9mD9GyO6CCr',
      position: 'UI/UX Designer',
      info: 'Aliquid dolore labore est explicabo praesentium asperiores voluptatem. Corporis non quis ut facere. Sit dolorem dolore rerum. Dolorum et quia. Earum maxime qui earum dolorem eaque fugiat rerum nesciunt culpa. Culpa minus dolore saepe ut voluptas voluptatum. Sint non nemo rerum aut. Quis fuga consequatur. Voluptates vero consequatur sunt vero. Quasi aliquid magni officiis autem debitis explicabo voluptatum nulla doloremque. Corrupti rerum libero porro voluptatem voluptas cumque assumenda veritatis. Est dolores et numquam culpa. Praesentium consequatur incidunt molestiae expedita. Sapiente quo iusto id impedit et veniam nisi. Cupiditate iste porro. Odit veniam placeat. Eius sapiente optio dicta odit qui. Repudiandae nostrum quia odio doloremque. Dolor cumque quas in nisi sed voluptatibus ratione. Voluptatem sed consequatur distinctio. Eligendi animi ut quaerat minus rerum commodi. Qui accusantium dolorum perspiciatis suscipit vel alias. Et enim officiis. Nemo porro aperiam ab quibusdam nihil. Et dicta nihil et molestiae veritatis maiores voluptate totam facilis. Consequatur odit omnis numquam consequatur impedit. Cumque est ipsam. Qui corporis et necessitatibus. Rem quo sed nostrum quod voluptatem. A soluta cum. Aperiam ut non. Sed temporibus quis eveniet voluptas rerum reiciendis dolore aliquid sapiente. Delectus veniam explicabo consectetur nesciunt quas. Et impedit quasi quis. Pariatur nisi praesentium voluptates ut quo. Voluptatem consequuntur corporis voluptas. At ad nemo quae ut dolorem enim harum consequatur. Repudiandae cumque debitis. Ab facilis eos aspernatur ullam deserunt veniam ipsa nobis repellat. Eligendi sit accusantium dicta distinctio sint ipsum sunt qui. Saepe necessitatibus similique asperiores velit consequatur iure nihil sit deserunt. Similique molestiae ipsam. Molestiae non autem totam suscipit ea et eligendi nemo.',
      location: 'San Francisco',
      department: 'Design',
    },
    {
      id: 'fsOw03AoDm6do4udFZIbn',
      createdAt: 1647779563848,
      organizationId: 'amYXmIyT9mD9GyO6CCr',
      position: 'Software Engineer',
      info: 'Nostrum quas quis delectus qui assumenda quasi cum. Voluptatem omnis veritatis culpa voluptatem id fuga unde ut earum. Delectus quam fugiat excepturi consequuntur excepturi qui quisquam. Cupiditate dolorum quia molestiae ut magnam id qui nihil sint. Quidem minima veniam voluptatem. Quas libero quisquam aut harum iure voluptatum officia. Officiis et ullam incidunt veniam. Et consequuntur iste consequatur sapiente. Officia qui aut numquam vitae earum dolorum ipsum quas a. Itaque voluptatem impedit optio. Eum illo molestiae accusantium aut expedita. A autem nihil qui placeat eligendi doloremque modi facilis non. Quis voluptas et repellendus sunt quibusdam. Id qui qui vel sed sint. Soluta deleniti molestiae consequatur est qui placeat. Et error officiis pariatur est quia ab quo. Qui impedit ipsam autem est odit. Blanditiis sunt cupiditate dolorum error aperiam quaerat et dolores sed. Voluptatem repellendus ut laudantium ipsa dolor quos numquam aut impedit. Et nulla magnam sunt nesciunt recusandae eos commodi quidem incidunt. Vero sed temporibus tenetur rem voluptatibus eius dolore velit. Enim maxime maiores eum ut praesentium. Dignissimos natus minima. Rerum atque repellendus dolorem dignissimos. Odio enim repellendus esse cupiditate incidunt eos sint a. Eum facilis nesciunt quod porro reiciendis non. Vel provident non minus repudiandae est. Quia eos nulla officia voluptate. Itaque quis alias vitae id et voluptate consequuntur quis pariatur. Unde eveniet id dolorum facere officiis. Totam quos non minima officia repellat. Quos quibusdam dolores voluptatem sequi sapiente nemo et in. Sed consequuntur nam. Exercitationem sint aut. Quia et iusto velit voluptatem. Nam ipsum et sed veniam sit veritatis ut soluta. Est placeat enim et id qui qui voluptas. Alias inventore quasi repudiandae. Sapiente odit et et. Ut ipsa quam ipsa aut est at rem voluptatem. Illum ipsam nisi sit quo consequatur accusantium possimus aut praesentium. Laboriosam doloremque maiores impedit assumenda saepe alias omnis corporis. Ratione qui accusantium consequatur quaerat praesentium nemo dicta et recusandae. Suscipit doloribus error dolores iure. Hic id ut asperiores cum dicta. Iste ea qui excepturi ut. Dolores quasi omnis explicabo similique quis architecto porro quis. Qui dolores aut voluptatem ducimus est corporis. Necessitatibus culpa natus non.',
      location: 'Amsterdam',
      department: 'Engineering',
    },
    {
      id: 'vyXO36A_L_fkPFVlAFGNm',
      createdAt: 1647674387439,
      organizationId: 'amYXmIyT9mD9GyO6CCr',
      position: 'HR Manager',
      info: 'Qui voluptatum perspiciatis maxime deleniti id porro. Laudantium mollitia non amet voluptas tenetur asperiores quos perferendis. Reprehenderit quae culpa harum. Autem iure unde consequatur est et aut quia incidunt ut. Autem voluptatum nemo velit corrupti natus reiciendis aperiam ullam consectetur. Ea et et dolorum quo distinctio occaecati. Voluptatibus soluta placeat dignissimos magni necessitatibus. Culpa vel vel autem praesentium. Error fugit corporis dolor dolorem sit facilis blanditiis ut. Tenetur dolorum et quo deleniti veniam vitae maiores. Atque dolorem consequatur. Rerum ut sint accusantium. Sunt odit quis ea dolores. Natus quidem repudiandae illum repudiandae et consectetur et consectetur. Enim a nam quas eligendi temporibus. Asperiores et qui exercitationem enim. Perspiciatis ducimus est inventore. Nemo optio rerum voluptatem. Et ratione qui temporibus et nulla explicabo. Ea consequuntur possimus veritatis voluptas molestiae et temporibus. Id occaecati et officia eum velit incidunt et modi. Vero laudantium voluptates. Dolores et voluptatem omnis est. Cum rerum ullam est aperiam eum quia non dicta dolores. Animi earum ad quos sequi sapiente illum et et. Dolorem illo iste. Quia asperiores dolorum et libero et. Dolorem eaque deleniti reprehenderit et eos repellat et qui. Fugit repudiandae provident maiores. Nisi ea possimus ab magni non. Culpa hic eaque modi ea illum. Quisquam vel rerum tempore enim quae non. Ex repudiandae aspernatur. Harum aliquam ut. Et voluptas vel incidunt facilis et dolores quia tempora quibusdam. Velit ea rem ad ad et neque quo ullam optio. Fugit aliquam molestias. Neque corporis sint omnis et aut autem. Velit velit illo numquam provident dicta. Qui alias molestiae voluptatum illo. Alias distinctio rerum sit molestiae molestias soluta. Tempore eaque qui veritatis ex voluptas nulla qui et. Quasi distinctio dolore omnis doloremque eaque iusto possimus qui aspernatur. Aut nihil eum ullam libero exercitationem mollitia nam pariatur. Quas suscipit fugit et exercitationem delectus et. Ut in quo fugiat. Alias expedita et alias at.',
      location: 'San Francisco',
      department: 'People',
    },
    {
      id: 'qHY8E7_voEnSLDtV9wbPo',
      createdAt: 1646175551830,
      organizationId: 'amYXmIyT9mD9GyO6CCr',
      position: 'Software Engineer',
      info: 'Et ipsam quis sed nihil nostrum. Et occaecati optio id et error id incidunt. In quos aut nemo aut temporibus itaque ut. Illo nihil rerum illo et quibusdam consectetur non omnis. Ea rerum sint ea aliquid quis sunt ad. Ab iure sunt consequuntur accusantium voluptate error. Reiciendis nobis quam nobis deleniti quam. Voluptatum ut repudiandae commodi aut. Unde assumenda ut. Quo ut ipsam deserunt aut. Molestiae incidunt iste ut consectetur minus. Non quae minima ratione. Dolor ut voluptas voluptatem. Ut consequatur quisquam. Rerum exercitationem voluptas quo illum ipsum aut ipsam odio libero. Veniam molestiae aut sed optio consectetur. Aliquid optio iste laudantium atque ab soluta sequi. Laborum dolor odio itaque pariatur quam dolorem. Quasi adipisci velit eius est nostrum a et aut nobis. Voluptatum facilis quo. Quod quos eius. Ut amet aut non. Eveniet modi placeat sed velit ut quos blanditiis est id. Quasi molestiae corrupti autem quidem repellat et molestiae hic. Atque dolores odio neque omnis quos quis. Quis velit odio quidem fuga. Ex sunt consequatur nam distinctio sequi nisi eveniet dolor. In eum nostrum. Repellendus temporibus nihil odit ea quo et deleniti tempore perferendis. Sint est esse. Nihil at itaque veritatis nostrum libero. Dolores quia minima odit aut sit et libero omnis distinctio. Debitis voluptatem neque necessitatibus explicabo assumenda. Qui consequatur saepe sit asperiores aliquam labore deserunt. Neque minima et et fugit. Ut blanditiis perspiciatis. Amet quas maiores aliquam fugit. Velit culpa corporis. Qui adipisci sunt voluptate consequuntur ut reiciendis dolor quia. Dolor in aut et nihil tempore odit delectus. Et ea tempore. Cum doloribus blanditiis dolorem dolorum reiciendis cum aperiam ut blanditiis. Quisquam veritatis molestiae molestias dicta ad voluptas facilis adipisci. Fugiat eum asperiores.',
      location: 'Belgrade',
      department: 'Engineering',
    },
    {
      id: '7w985IIr1gSusUrytG6lg',
      createdAt: 1646769265139,
      organizationId: 'amYXmIyT9mD9GyO6CCr',
      position: 'Software Engineer',
      info: 'Est magnam aut asperiores odio. Quaerat eum illo harum laboriosam. Velit quos doloremque numquam nihil omnis est est sed. Impedit ut velit sed et. Neque eum repellat quis. Repudiandae delectus atque est officiis. Aut quisquam eum numquam et fugiat illo. At excepturi cupiditate officiis consequuntur similique quis et qui iste. Aperiam debitis ex neque repellat at. Qui modi voluptas. Veniam eos modi dolores. Velit optio iusto doloremque nemo sed a repellendus dolorum. Consequatur quod rem eligendi et maiores. Labore pariatur odio sint enim labore harum totam fuga minus. Dignissimos repudiandae eum quo. Deserunt error autem. Voluptatem dolor qui occaecati dolores quidem earum facere. Ut ipsum dolorem reprehenderit ex cumque est ratione. Aliquid fuga consectetur omnis. Sed rerum doloribus dolorem impedit. Nihil quia sit voluptates minus provident dolore et voluptatem omnis. Nemo architecto eligendi nemo esse. Odit ab voluptatem qui et. Eum ullam dolor. Magni aperiam nulla doloribus illum exercitationem est deserunt voluptas aspernatur. Ipsum qui ut qui. Officiis aperiam sunt facilis qui velit placeat laborum sequi. Necessitatibus aperiam rem inventore sed. Voluptatem molestiae vel vel aliquid minima sint. Maiores quod harum. Ut libero veniam. Optio laudantium culpa sunt voluptatem temporibus quia ipsa. Qui delectus odit quia ut qui. Culpa aspernatur et aliquam natus aliquam qui velit officiis accusantium. Autem et corrupti voluptas et reprehenderit. Dolorem placeat et ipsum eaque et quia explicabo ullam. Nostrum et vero porro. Ipsa libero numquam. Et pariatur quia atque esse excepturi. Eligendi autem et. Deserunt nesciunt aut doloribus quo sapiente quia eos omnis. Facilis ut eveniet molestias tenetur. Animi aut in repellendus nulla quidem totam consequatur soluta est. Est aut soluta quo ut perspiciatis fugiat. Rerum nihil aliquam alias. Qui nostrum quo voluptatum culpa unde tenetur.',
      location: 'London',
      department: 'Engineering',
    },
    {
      id: 'H0M9DEFvMj6XOSg9gknvF',
      createdAt: 1648219728378,
      organizationId: 'amYXmIyT9mD9GyO6CCr',
      position: 'HR Manager',
      info: 'Voluptate qui natus voluptatem. In consequatur laudantium veritatis iste dolores asperiores. Modi tempore dolor nostrum voluptates sed atque consectetur sint nihil. Excepturi nulla quae. Quasi vel sed quia ut. Error iure cumque laudantium dolorum velit eveniet. Labore dolores omnis magnam fugit in voluptatum soluta nihil. Quisquam hic eligendi sunt est quo aperiam quisquam. Exercitationem sunt est asperiores ullam ipsa aliquam. Distinctio quo repellendus est voluptatum id consequatur eveniet nihil. Aliquam rem possimus est est quis quis corporis. Pariatur et asperiores. Eveniet labore dolor consectetur dolores eligendi ut iste. Fuga vero quod suscipit ut eaque incidunt inventore accusantium. Voluptatem consequatur explicabo laboriosam consequatur rerum ea eveniet. Quae sit ducimus et quaerat corporis magni et. Quod numquam eum doloribus et maiores cumque nobis. Et ut quis incidunt ipsa mollitia in nulla. Hic iste fugit inventore nihil. Sit suscipit qui ut ut in voluptate qui eos. Fugiat similique at assumenda voluptas delectus voluptates et consequuntur. Sunt ut fugiat veniam ut. Ad porro cupiditate beatae facere velit. Quia exercitationem quos quia quia voluptas suscipit explicabo rem et. Voluptatem reprehenderit sed sit soluta consequuntur. In neque itaque consequatur quisquam debitis cumque sapiente consequatur sit. Occaecati sint adipisci numquam qui quia nihil. A reprehenderit soluta blanditiis. Quas quibusdam ea aspernatur illum porro doloribus perspiciatis sit. Consequatur quia consequatur quod sint. Ut mollitia dolore minima aut. Optio et est qui. Cupiditate optio fugiat amet atque rerum. Et voluptatem id quibusdam placeat. Quisquam eius nemo quam id autem rerum voluptas quisquam. Occaecati est recusandae dolores. Amet velit soluta vero provident temporibus. Sint adipisci tempore molestiae aperiam unde culpa ex recusandae. Officia in voluptatem. Sunt ducimus rem iure ullam aliquam aut rerum. Ut deleniti quia est consectetur est vitae iure. Corrupti provident qui voluptatem voluptatibus itaque soluta illum et. Quia quos inventore et consequuntur cumque ullam consequatur velit vel. Sunt porro quis quasi. Voluptatem consequuntur suscipit vel. Mollitia rerum qui nihil. Excepturi expedita vero harum animi esse dolorem recusandae.',
      location: 'Belgrade',
      department: 'People',
    },
    {
      id: '2rj6FByCrGbKPy7vER8Oz',
      createdAt: 1648158334724,
      organizationId: 'amYXmIyT9mD9GyO6CCr',
      position: 'Software Engineer',
      info: 'Ut fugiat error officiis et. Nostrum quia sed sapiente ut in enim. Consectetur quis eligendi tempora ut. Qui eveniet quis occaecati. Aut molestiae sed dolor magni omnis provident ipsam quia. Ut est reprehenderit nam distinctio earum. Minima nesciunt aliquam ea incidunt. Voluptatem sint eius nihil placeat voluptatibus sint non. Aut tempore magnam ipsum omnis illo. Sed vel aut rerum laudantium aut a dolor sunt recusandae. Atque eveniet sit odit. Pariatur corrupti harum sed. Consectetur aliquid facere non quis aut qui. Aut eos porro repellat voluptate. Architecto repellendus nihil tempora et. Omnis ea adipisci dolorem distinctio. Dicta eius accusamus quis ullam et. Alias omnis adipisci et consequatur et. Id consequuntur quas dolore perferendis et optio aut. Aut aliquam ratione quibusdam et exercitationem corrupti libero. Architecto atque consequuntur inventore. Voluptatibus adipisci eos enim. Aut nulla tempore numquam. Dolores tenetur incidunt. Accusamus molestias vel nulla vero dolores qui. Non aut porro voluptate ipsum cumque dolorem. Necessitatibus sed non distinctio. Quia et tempora. Ipsa deserunt corporis dolorem porro ratione autem esse non. Sit aut molestiae dolores omnis corrupti aut corrupti rerum. Non eum nisi nihil. Et iure qui. Facilis quidem beatae molestias. Placeat numquam neque quaerat libero. Maxime vel dignissimos provident porro quae earum. Sed esse sit sit voluptas. Quaerat ipsam non nihil aspernatur quia corporis placeat. At corrupti occaecati vel. Eum quo non quas molestiae similique. Est illo modi quasi nihil sunt vitae illo velit id. Doloribus voluptas vero modi eligendi. Similique beatae voluptas quia qui totam quidem nemo at incidunt. Voluptatem animi vel aut vel quos nostrum et et et.',
      location: 'New York',
      department: 'Engineering',
    },
  ],
};

const delayedFn =
  <T, A extends any[]>(
    fn: (...args: A) => T,
    ms: number
  ) =>
  (...args: A) => {
    return new Promise<T>((resolve) =>
      setTimeout(() => resolve(fn(...args)), ms)
    );
  };

export const getUser = delayedFn(
  () => testData.users[0],
  0
);

export const getOrganization = delayedFn(
  (id: string) =>
    testData.organizations.find((o) => o.id === id) ||
    null,
  300
);

export const getJobs = delayedFn(
  (organizationId: string) =>
    testData.jobs.filter(
      (j) => j.organizationId === organizationId
    ),
  300
);

export const getJob = delayedFn(
  (id: string) =>
    testData.jobs.find((j) => j.id === id) || null,
  300
);

const useTestData = <T>(promise: Promise<T>) => {
  const [testData, setTestData] = useState<T | null>(
    null
  );

  useEffect(() => {
    if (!testData) {
      promise.then(setTestData);
    }
  }, [promise, testData]);

  return { data: testData, isLoading: !testData };
};

export const useUser = () => useTestData(getUser());

export const useOrganization = (id: string) =>
  useTestData(getOrganization(id));

export const useJobs = (organizationId: string) =>
  useTestData(getJobs(organizationId));

export const useJob = (id: string) =>
  useTestData(getJob(id));
