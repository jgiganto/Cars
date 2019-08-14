using Bsd.Cars.Application.Shared.Request;
using System.Collections.Generic;

namespace Bsd.Cars.Application.Shared
{
    public class PaginatedRequest : IPaginatedRequest
    {
        public int Skip { get; set; }
        public int Take { get; set; }
    }
}
